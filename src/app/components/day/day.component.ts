import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.styl']
})
export class DayComponent implements OnInit {

  @Input() numberDay: number
  @Input() passed = true

  constructor() { }

  ngOnInit(): void {
  }

}
