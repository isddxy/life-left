import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Data} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit{
  title = 'Life left';

  longevity: number

  birthDay: Data
  today = moment()
  dateDeath: Data

  passedDays: number
  futureDays: number
  showDays = false

  ngOnInit() {
  }

  setBirthDay($event: any) {
    this.birthDay = $event;
    this.calculatePassedDays()
    this.setDateDeath()
    this.calculateFutureDays()
    this.showDays = true
  }

  setDateDeath() {
    console.log(this.longevity)
    this.dateDeath = moment(moment(this.birthDay).add(this.longevity, 'years').format('YYYY-MM-DD'))
    console.log(this.dateDeath)
  }

  calculatePassedDays() {
    this.passedDays = this.today.diff(this.birthDay, 'days')
  }

  calculateFutureDays() {
    this.futureDays = this.dateDeath.diff(this.today, 'days')
  }

  setLongevity($event: any) {
    this.longevity = $event
  }
}
