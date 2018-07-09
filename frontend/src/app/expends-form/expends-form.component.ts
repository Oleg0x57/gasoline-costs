import { Component, OnInit } from '@angular/core';
import { Expend, GASOLINE_TYPES } from '../expend';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-expends-form',
  templateUrl: './expends-form.component.html',
  styleUrls: ['./expends-form.component.css']
})
export class ExpendsFormComponent implements OnInit {

  model: Expend;

  types: any[] = GASOLINE_TYPES;

  constructor(private api: ApiService) {
    this.model = new Expend();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.api.addExpend();
  }

}
