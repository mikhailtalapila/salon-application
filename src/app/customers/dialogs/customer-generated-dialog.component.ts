import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ICustomer } from '../models/customer';

@Component({
  selector: 'salon-customer-generated-dialog',
  templateUrl: './customer-generated-dialog.component.html',
  styleUrls: ['./customer-generated-dialog.component.css']
})
export class CustomerGeneratedDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CustomerGeneratedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICustomer) { }

  ngOnInit() {
  }
  onOkClick(): void {
    this.dialogRef.close();
  }
}
