// src/app/modules/admin/components/item-type/item-type.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-uom-master',
  templateUrl: './uom-master.component.html',
  styleUrls: ['./uom-master.component.scss']
})
export class UomMasterComponent {
  itemTypeForm: FormGroup;
  transTypes: string[] = ['Type1', 'Type2', 'Type3']; // Example trans types

  constructor(private fb: FormBuilder) {
    this.itemTypeForm = this.fb.group({
      transType: [''],
      itemTypeGroup: [''],
      itemType: ['', Validators.required],
      type: ['Asset'],
      billType: ['Billable'],
      description: [''],
      prefix: ['', Validators.required],
      purchaseExpiryCode: ['']
    });
  }

  onSubmit() {
    if (this.itemTypeForm.valid) {
      console.log(this.itemTypeForm.value);
    }
  }
}
