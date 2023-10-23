import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/app.service';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: Person[] = []
  constructor(private appService: AppService = Inject(AppService)) {}

  ngOnInit(): void {
    this.appService.getAllUsers().subscribe((users) => {this.users = users;});
  }
}
