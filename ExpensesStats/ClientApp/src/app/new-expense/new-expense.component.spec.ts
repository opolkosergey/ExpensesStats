/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { NewExpenseComponent } from './new-expense.component';

let component: NewExpenseComponent;
let fixture: ComponentFixture<NewExpenseComponent>;

describe('new-expense component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ NewExpenseComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(NewExpenseComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});