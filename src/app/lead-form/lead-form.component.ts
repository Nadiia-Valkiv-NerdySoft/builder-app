import { Component, Input } from '@angular/core';
import { BuilderBlock } from '@builder.io/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.component.html',
  styleUrls: ['./lead-form.component.scss'],
})
export class LeadFormComponent {
  @Input() emailPlaceholder = 'Enter your email'; // ← обов'язково через @Input
  @Input() zipPlaceholder = 'Enter your ZIP code';
  @Input() buttonText = 'Submit';
  @Input() title = 'Get in touch with us';

  leadForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    zip: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{5}$/),
    ]),
  });

  onSubmit() {
    if (this.leadForm.valid) {
      console.log('Form Submitted', this.leadForm.value);
    }
  }
}

BuilderBlock({
  tag: 'app-lead-form',
  name: 'Lead Form',
  //@ts-ignore
  meta: {
    selector: 'app-lead-form',
  },
  inputs: [
    {
      name: 'emailPlaceholder',
      type: 'string',
    },
    {
      name: 'zipPlaceholder',
      type: 'string',
    },
    {
      name: 'buttonText',
      type: 'string',
    },
    {
      name: 'title',
      type: 'string',
    },
  ],
})(LeadFormComponent);
