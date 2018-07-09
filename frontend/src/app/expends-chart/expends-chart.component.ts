import { Component, OnInit, Input } from '@angular/core';
import { Expend } from '../expend';

@Component({
  selector: 'app-expends-chart',
  templateUrl: './expends-chart.component.html',
  styleUrls: ['./expends-chart.component.css']
})
export class ExpendsChartComponent implements OnInit {

  @Input() records: Expend[];

  constructor() { }

  ngOnInit() {
  }

}
