// src/app/modules/admin/components/item-type/item-type.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-type',
  templateUrl: './item-type.component.html',
  styleUrls: ['./item-type.component.scss']
})
export class ItemTypeComponent {
  itemTypeForm: FormGroup;
  transTypes: string[] = ['Type1', 'Type2', 'Type3']; // Example trans types

  constructor(private fb: FormBuilder) {
    this.itemTypeForm = this.fb.group({
      transType: [''],
      itemTypeGroup: [''],
      itemType: ['', Validators.required],
      type: ['Asset'],
      billType: ['Billable'],
      misHeads: [''],
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
