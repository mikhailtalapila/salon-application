import { Component, OnInit, Inject } from '@angular/core';
import { IGiftCard } from '../models/gift-card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'salon-gift-card-generated-id-dialog',
  templateUrl: './gift-card-generated-id-dialog.component.html',
  styleUrls: ['./gift-card-generated-id-dialog.component.css']
})
export class GiftCardGeneratedIdDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GiftCardGeneratedIdDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IGiftCard) { }

  ngOnInit() {
  }
  onOkClick(): void {
    this.dialogRef.close();
  }
}
