import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxImageCompressService } from 'ngx-image-compress';
import { OnEnterDirective } from 'src/app/directives/on-enter/on-enter.directive';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    // PdfViewerModule,
    FormsModule,
    YouTubePlayerModule,
    // OnEnterDirective
  ],
  exports: [
    MaterialModule,
    // OnEnterDirective,
    // PdfViewerModule,
    FormsModule,
    YouTubePlayerModule
  ],
  providers: [NgxImageCompressService]
})
export class SharedModule { }
