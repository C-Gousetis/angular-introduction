import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-bing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-bing.component.html',
  styleUrls: ['./event-bing.component.css']
})

export class EventBingComponent {
  times = 0;
  userInput = "";

  increaseCounter() {
    this.times +=1;
  };

  resetCounter() {
    this.times = 0;
  };

  onUserInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.userInput = target.value;
  }
}
