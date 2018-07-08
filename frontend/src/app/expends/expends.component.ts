import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-expends',
  templateUrl: './expends.component.html',
  styleUrls: ['./expends.component.css']
})
export class ExpendsComponent implements OnInit {

  expends: any[];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getExpends();
  }

  getExpends() {
    this.api.getExpends().subscribe(expends => this.expends = expends);
  }

}
