import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Expend } from '../expend';

@Component({
  selector: 'app-expends',
  templateUrl: './expends.component.html',
  styleUrls: ['./expends.component.css']
})
export class ExpendsComponent implements OnInit {

  expends: Expend[];
  isTable: boolean;
  isChart: boolean;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.isTable = true;
    this.isChart = false;
    this.getExpends();
  }

  getExpends() {
    this.api.getExpends().subscribe(expends => this.expends = expends);
  }

  selectTable(){
    this.isTable = true;
    this.isChart = false;
  }

  selectChart(){
    this.isTable = false;
    this.isChart = true;
  }

}
