import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppRoutes, ModalTypes } from 'src/app/enums/app.enums';
import { AppHelperFunction } from 'src/app/helpers/app-helper.functions';
import { AppModalService } from 'src/app/services/app-modal/app-modal.service';
import { LoginService } from 'src/app/services/login/login.service';
import { TokenService } from 'src/app/services/token/token.service';

enum DocumentsToDisplayEnum {
  RunwayInfo = 'runwayInfo',
  EmergencyContacts = 'emergencyContacts',
  SalesBrochure = 'salesBrochure',
  ParamotorPilots = 'aramotorPilots',
  GroundOperations = 'groundOperations',
  NOTAMSNewTab = 'notamsnewTab',
  CircuitProcedures = 'circuitProcedures',
  JoiningAndLanding = 'joiningAndLanding',
  DensityAltitude = 'densityAltitude',
  TrackMeNewTab = 'trackMeNewTab'
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor() {
  }


  ngOnInit() {
  }

}
