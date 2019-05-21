import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent  {

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
