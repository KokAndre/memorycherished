import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MoreRoutingModule } from './more-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    MoreRoutingModule,
    SharedModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class MoreModule { }
