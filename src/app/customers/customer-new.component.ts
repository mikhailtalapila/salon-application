import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { CustomerDataService } from './services/customer-data.service';
import { Router } from '@angular/router';
import { GenericValidator } from '../shared/validators/generic.validator';
import { ICustomer } from './models/customer';
import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CustomerGeneratedDialogComponent } from './dialogs/customer-generated-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'salon-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  customerForm: FormGroup;
  errorMessage: string;
  customer: ICustomer;
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };  
  private genericValidator: GenericValidator;
  constructor(private _fb: FormBuilder,
              private _router: Router,
              private _customerDataService: CustomerDataService,
              private _dialog: MatDialog) {
      this.validationMessages = {
        customerFirst: {
          required: 'First name is required'
        },
        customerLast: {
          required: 'Last name is required'
        }
      }
      this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    this.customerForm = this._fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      primaryPhoneNumber: '',
      secondaryPhoneNumber: '',
      notes: '',
      isDeleted: 'false'
    });
  }
  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    merge(this.customerForm.valueChanges, ...controlBlurs).pipe(
      debounceTime(800)
    ).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.customerForm);
    });
  }
  navigateToCustomerList(): void {
    this._router.navigate(['customers', 'customer-list']);
  }
  saveCustomer(): void {
    const cust = { ...this.customer, ...this.customerForm.value };
    this._customerDataService.addCustomer(cust)
      .subscribe(
        value => {
          console.log('customer added', value);
          this.navigateToCustomerList();
        }
      )
  }
  onSaveComplete(): void {
    this.customerForm.reset();
    this.navigateToCustomerList();
  }
}
