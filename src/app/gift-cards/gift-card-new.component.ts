import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren } from '@angular/core';
import { FormControlName, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IGiftCard } from './models/gift-card';
import { Router } from '@angular/router';
import { GiftCardDataService } from './services/gift-card-data.service';
import { MatDialog } from '@angular/material';
import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GenericValidator } from '../shared/validators/generic.validator';
import { NumberValidators } from '../shared/validators/number.validator';
import { GiftCardGeneratedIdDialogComponent } from './dialogs/gift-card-generated-id-dialog.component';

@Component({
  selector: 'salon-gift-card-new',
  templateUrl: './gift-card-new.component.html',
  styleUrls: ['./gift-card-new.component.css']
})
export class GiftCardNewComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  giftCardForm: FormGroup;
  errorMessage: string;
  giftCard: IGiftCard;
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  constructor(private _fb: FormBuilder, 
              private _router: Router, 
              private _giftCardDataService: GiftCardDataService,
              private _dialog: MatDialog) { 
                this.validationMessages = {
                  giftCardFrom: {
                    required: 'Person From is required.',
                    minlength: 'Person name must be at least one character.',
                    maxlength: 'Person name cannot exceed 50 characters.'
                  },
                  giftCardTo: {
                    required: 'Product code is required.',
                    minlength: 'Person name must be at least one character.',
                    maxlength: 'Person name cannot exceed 50 characters.'
                  },
                  amount: {
                    range: 'Gift Certificate amount must be  between 1 (lowest) and 10000 (highest).'
                  }
                };
                this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    this.giftCardForm = this._fb.group({
      amount: ['', [Validators.required, NumberValidators.range(0, 10000)]],
      from: ['', [Validators.maxLength(50)]],
      to: ['', [Validators.maxLength(50)]],
      note: ''
    });
  }
  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    merge(this.giftCardForm.valueChanges, ...controlBlurs).pipe(
      debounceTime(800)
    ).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.giftCardForm);
    });
  }
  navigateToGiftCardList(): void {
    this._router.navigate(['gift-cards', 'gift-card-list']);
  }
  saveGiftCard(): void {
    const gc = { ...this.giftCard, ...this.giftCardForm.value };
    gc.dateSold = new Date();
    this._giftCardDataService.createGiftCard(gc)
      .subscribe(
        value =>  { 
          console.log('value added: ', value);
          const dialogRef = this._dialog.open(GiftCardGeneratedIdDialogComponent, {
            width: '250px',
            data: {id: value.id}
          });
          dialogRef.afterClosed().subscribe(() => {
            this.onSaveComplete();
          });
        },
        (error: any) => this.errorMessage = <any>error
      );
  }
  onSaveComplete(): void {
    this.giftCardForm.reset();
    this.navigateToGiftCardList();
  }

}
