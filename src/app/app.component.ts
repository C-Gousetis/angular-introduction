import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from './interfaces/person';

import { PersonComponent } from './person/person.component';
import { PersonAltComponent } from './person-alt/person-alt.component';
import { EventBingComponent } from './event-bing/event-bing.component';
import { OutputDemoComponent } from './output-demo/output-demo.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppService } from './app.service';
import { CrudDemoComponent } from './crud-demo/crud-demo/crud-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent,
            EventBingComponent, OutputDemoComponent, PersonCardComponent,
          TemplateDrivenFormComponent, ReactiveFormComponent,
          CrudDemoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string = "Catherine";
  lastname: string = "Gousetis";

  person: Person = {
    givenName: "Catherine",
    surname : "Gousetis",
    age : 32,
    email : "c.gousetis@yahoo.com",
    address: "Athens, Greece"
  };
  
  person2: Person = {
    givenName: "Giorgos",
    surname : "Chatzidimitrakopoulos",
    age : 32,
    email : "c.gousetis@yahoo.com",
    address: "Athens, Greece"
  };

  users1: Person[] = [
    {
      givenName: 'John',
      surname: 'Doe',
      age: 30,
      email: 'john.doe@example.com',
      address: '123 Main St',
      photoURL: 'https://i.pravatar.cc/?img=1'
    },
    {
      givenName: 'Jane',
      surname: 'Doe',
      age: 28,
      email: 'jane.doe@example.com',
      address: '123 Main St',
      photoURL: 'https://i.pravatar.cc/?img=2'
    },
    {
      givenName: 'Jim',
      surname: 'Brown',
      age: 45,
      email: 'jim.brown@example.com',
      address: '456 Park Ave',
      photoURL: 'https://i.pravatar.cc/?img=3'
    },
    {
      givenName: 'Jill',
      surname: 'Brown',
      age: 42,
      email: 'jill.brown@example.com',
      address: '456 Park Ave',
      photoURL: 'https://i.pravatar.cc/?img=4'
    },
    {
      givenName: 'Jake',
      surname: 'Smith',
      age: 36,
      email: 'jake.smith@example.com',
      address: '789 Broadway',
      photoURL: 'https://i.pravatar.cc/?img=5'
    },
    {
      givenName: 'Judy',
      surname: 'Smith',
      age: 34,
      email: 'judy.smith@example.com',
      address: '789 Broadway',
      photoURL: 'https://i.pravatar.cc/?img=6'
    },
    {
      givenName: 'Jack',
      surname: 'Johnson',
      age: 50,
      email: 'jack.johnson@example.com',
      address: '321 Oak St',
      photoURL: 'https://i.pravatar.cc/?img=7'
    },
    {
      givenName: 'Julie',
      surname: 'Johnson',
      age: 48,
      email: 'julie.johnson@example.com',
      address: '321 Oak St',
      photoURL: 'https://i.pravatar.cc/?img=8'
    },
    {
      givenName: 'Jerry',
      surname: 'Davis',
      age: 55,
      email: 'jerry.davis@example.com',
      address: '654 Pine St',
      photoURL: 'https://i.pravatar.cc/?img=9'
    },
    {
      givenName: 'June',
      surname: 'Davis',
      age: 53,
      email: 'june.davis@example.com',
      address: '654 Pine St',
      photoURL: 'https://i.pravatar.cc/?img=10'
    },
  ];

  users: Person[] = []; 

  constructor(private appService: AppService = Inject(AppService)) {}

  ngOnInit(): void {
    this.appService.getAllUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users)
    })
  }

  sentUser: Person | undefined;

  onDeleteUser(i: number) {
    this.users1.splice(i,1);
  }

  onSendUser(user: Person) {
    console.log(user);
    this.sentUser = user;
  }

  onNewPerson(person: Person) {
    this.users1.push(person);
  }

}
