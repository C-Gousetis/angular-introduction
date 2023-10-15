import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Catherine";
  lastname: string = "Gousetis";

  person = {
    givenName: "Catherine",
    surname : "Gousetis",
    age : 32,
    email : "c.gousetis@yahoo.com"
  }
}
