import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
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
  
}
