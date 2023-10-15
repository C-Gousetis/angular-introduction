import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  

  // @Input() person: Person | undefined

  @Input() person: Person = {
    givenName: "The person's firsname",
    surname : "The person's lastname",
    age : 0,
    email : "The person's email",
    address: "The person's address"
  } 
}
