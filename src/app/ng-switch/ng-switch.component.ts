import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {

  constructor() { }



  people: any[] = [
    {
      name: 'Tejas Kulkarni',
      age: 23,
      state: 'Maharashtra'
    },
    {
      name: 'Vamsi Krishna',
      age: 24,
      state: 'Andhra Pradesh'
    },
    {
      name: 'Sumit Gurav',
      age: 25,
      state: 'Maharashtra'
    },
    {
      name: 'Shubham Chauhan',
      age: 23,
      state: 'Uttarakhand'
    },
    {
      name: 'Prashob M',
      age: 24,
      state: 'Kerala'
    }
  ];
}
