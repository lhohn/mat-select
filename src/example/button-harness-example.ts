import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

type CreatePersonPerson = {
  bdIdent: FormControl<number>;
  nummer: FormControl<number>;
  title: FormControl<string>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  function: FormControl<string>;
  zipcode: FormControl<string>;
  town: FormControl<string>;
  street: FormControl<string>;
  comment: FormControl<string>;
  officePhoneNr: FormControl<string>;
  mobilePhoneNr: FormControl<string>;
  privatePhoneNr: FormControl<string>;
  faxnr: FormControl<string>;
  email: FormControl<string>;
  flags: FormControl<number>;
  ident: FormControl<number>;
};
type CreatePersonFormModel = {
  person: FormGroup<CreatePersonPerson>;
  connectedProperties: FormArray<FormControl<PropertyInformationDto>>;
  selectedFiltered: FormControl<boolean>;
  search: FormControl<string>;
};

type CreatePersonFormGroup = FormGroup<CreatePersonFormModel>;
/**
 * @title Testing with MatButtonHarness
 */
@Component({
  selector: 'button-harness-example',
  templateUrl: 'button-harness-example.html',
  standalone: true,
  imports: [MatButtonModule],
})
export class ButtonHarnessExample {
  clicked = false;
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
