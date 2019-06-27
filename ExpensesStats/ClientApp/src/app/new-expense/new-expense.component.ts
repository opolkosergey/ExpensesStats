import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'new-expense',
    templateUrl: './new-expense.component.html',
    styleUrls: ['./new-expense.component.css']
})
/** new-expense component*/
export class NewExpenseComponent {
    /** new-expense ctor */
    constructor() {

  }

  onSubmit(data: NgForm) {
    console.log(data);
  }
}
