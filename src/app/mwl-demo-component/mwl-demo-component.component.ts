import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { colors } from './colors';

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mwl-demo-component.component.html',
  styleUrls: ['./mwl-demo-component.component.css']
})
export class MwlDemoComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  viewDate: Date = new Date();

  events: CalendarEvent<{incrementsBadgeTotal: boolean}>[] = [{
    title: 'Increments badge total on the day cell',
    color: colors.yellow,
    start: new Date(),
    meta: {
      incrementsBadgeTotal: true
    }
  }, {
    title: 'Does not increment the badge total on the day cell',
    color: colors.blue,
    start: new Date(),
    meta: {
      incrementsBadgeTotal: false
    }
  }];

  addBadgeTotal(day: CalendarMonthViewDay): void {
    day.badgeTotal = day.events.filter(event => event.meta.incrementsBadgeTotal).length;
  }

}
