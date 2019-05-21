import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

  constructor() { }


  peopleByCountry: any[] = [
  {
      country: 'UK',
      people: [
        {
          name: 'Theresa May'
        },
        {
          name: 'Winston Churchill'
        },
      ]
    },
    {
      country: 'US',
      people: [
        {
          name: 'Barack Obama'
        },
        {
          name: 'Donald Trump'
        },
        {
          name: 'Abraham Lincoln'
        }
      ]
    }
  ];





}
