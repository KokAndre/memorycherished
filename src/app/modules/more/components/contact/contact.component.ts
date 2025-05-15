import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactFormGroup: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeFormControls();
  }

  public initializeFormControls() {
    this.contactFormGroup = this.formBuilder.group({
      nameControl: new FormControl('', [Validators.required]),
      emailControl: new FormControl('', [Validators.required, Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,24})$')]),
      phoneNumberControl: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      messageControl: new FormControl('', [Validators.required]),
    });
  }

  public get nameControl() {
    return this.contactFormGroup.get('nameControl');
  }
  public get emailControl() {
    return this.contactFormGroup.get('emailControl');
  }
  public get phoneNumberControl() {
    return this.contactFormGroup.get('phoneNumberControl');
  }
  public get messageControl() {
    return this.contactFormGroup.get('messageControl');
  }

}
