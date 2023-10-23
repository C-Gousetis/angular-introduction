import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/app.service';
import { Person } from 'src/app/interfaces/person';
import { PersonCardComponent } from 'src/app/person-card/person-card.component';

@Component({
  selector: 'app-read-user',
  standalone: true,
  imports: [CommonModule, PersonCardComponent],
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent{
    
    constructor(private appService: AppService = Inject(AppService)){}

    foundUser: Person | undefined
    userNotFound = false;

    @ViewChild('userId') userIdInput! : ElementRef<HTMLInputElement>

    onClick(){
      const id = this.userIdInput.nativeElement.value;
      this.appService.getUserById(parseInt(id)).subscribe({
        next: (user) => {
          this.userNotFound = false;
          this.foundUser = user;
          
        },
        error: (error) => {
          this.foundUser = undefined;
          this.userNotFound = true;
          console.log(error)
        },
        complete: () => {
          console.log("Operation Completed")
        }
      })
    }

   
}
