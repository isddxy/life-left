import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Data} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.styl']
})
export class FormComponent implements OnInit {

  public input: Data
  public years = 75

  @Output() birthDay: EventEmitter<any> = new EventEmitter();
  @Output() yearsToDeath: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  add() {
    if(this.input) {
      this.birthDay.emit(this.input)
      this.yearsToDeath.emit(this.years)
    }
  }

}
