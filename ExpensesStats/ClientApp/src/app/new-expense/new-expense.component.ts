import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatCurrency, getNumberOfCurrencyDigits } from '@angular/common';

@Component({
    selector: 'new-expense',
    templateUrl: './new-expense.component.html',
    styleUrls: ['./new-expense.component.css']
})

export class NewExpenseComponent {
  public dates: Array<string>;
  public personOptions: Array<string>;
  public hasSelectedOption: boolean;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.dates = ["Today", "Yesterday"];
    http.get<string[]>(baseUrl + 'api/SampleData/Persons').subscribe(result => {
      this.personOptions = result;
    }, error => console.error(error));
  }

  onSubmit(data: NgForm) {
    console.log(data.value);
  }

  onDateChanged(event: any) {
    this.hasSelectedOption = event.target.value;
  }
}
