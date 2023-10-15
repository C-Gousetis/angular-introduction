import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from './interfaces/person';

import { PersonComponent } from './person/person.component';
import { PersonAltComponent } from './person-alt/person-alt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Catherine";
  lastname: string = "Gousetis";

  person: Person = {
    givenName: "Catherine",
    surname : "Gousetis",
    age : 32,
    email : "c.gousetis@yahoo.com",
    address: "Athens, Greece"
  }
  
  person2: Person = {
    givenName: "Giorgos",
    surname : "Chatzidimitrakopoulos",
    age : 32,
    email : "c.gousetis@yahoo.com",
    address: "Athens, Greece"
  }
}
