import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  cities = ['Almaty', 'New-York', 'Tokyo', 'Seoul'];

  constructor() { }

  ngOnInit() {
  }

}
