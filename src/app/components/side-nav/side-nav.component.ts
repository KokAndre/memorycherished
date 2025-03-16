import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ModalTypes } from 'src/app/enums/app.enums';
import { ModalDetails } from 'src/app/models/app-modal.model';
import { AppModalService } from 'src/app/services/app-modal/app-modal.service';
import { TokenService } from 'src/app/services/token/token.service';
import { AppModalComponent } from '../app-modal/app-modal.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public modal$: Subscription;
  public dialogRefModel: any = null;
  public checkIsAuthInterval: any;
  public isAuthorised = false;

  constructor(public appModalService: AppModalService, private modalDialog: MatDialog, public tokenService: TokenService) { }

  ngOnInit() {
    this.initializeIsLoggedInCheck();
    this.initializeModal();
  }

  public initializeModal() {
    this.modal$ = this.appModalService.onEmmitModal.subscribe((modalDetails: ModalDetails) => {
      if (!modalDetails) {
        this.modalDialog.closeAll();
        return;
      }

      const retData = modalDetails;

      // Close the current mddal before a new one can be opened
      this.modalDialog.closeAll();
      this.dialogRefModel = null;

      switch (modalDetails.type) {
        case ModalTypes.PDFModal:
          this.dialogRefModel = this.modalDialog.open(AppModalComponent, {
            data: modalDetails, disableClose: false, height: 'fit-content', panelClass: 'pdf-modal-class', maxWidth: '91vw'
          });
          break;

        case ModalTypes.InformationModal:
          this.dialogRefModel = this.modalDialog.open(AppModalComponent, {
            data: modalDetails, disableClose: false, maxWidth: '90vw', panelClass: 'min-width-modal-class'
          });

          // Close information modals after 3 seconds
          setTimeout(() => {
            this.modalDialog.closeAll();
          }, 1500);
          break;

        case ModalTypes.ConfirmationModal:
          this.dialogRefModel = this.modalDialog.open(AppModalComponent, {
            data: modalDetails, disableClose: false, maxWidth: '90vw', panelClass: 'min-width-modal-class'
          });
          break;

        default:
          this.dialogRefModel = this.modalDialog.open(AppModalComponent, {
            data: modalDetails,
          });
          break;
      }


      if (this.dialogRefModel !== null) {
        this.dialogRefModel.afterClosed().subscribe(result => {
          modalDetails.callbackMessageResult(result, retData);
          this.dialogRefModel = null;
        });
      }
      // }
    });
  }

  public initializeIsLoggedInCheck() {
    this.checkIsAuthInterval = setInterval(() => {
      this.isAuthorised = this.tokenService.isLoggedIn();
    }, 1000);

  }

}