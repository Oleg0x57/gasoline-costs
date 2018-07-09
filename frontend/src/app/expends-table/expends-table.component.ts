import { Component, OnInit, Input } from '@angular/core';
import { Expend } from '../expend';

@Component({
  selector: 'app-expends-table',
  templateUrl: './expends-table.component.html',
  styleUrls: ['./expends-table.component.css']
})
export class ExpendsTableComponent implements OnInit {

  @Input() records: Expend[];
  
  constructor() { }

  ngOnInit() {
  }

}
