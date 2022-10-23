import { Component } from '@angular/core';
import { GameControlService } from './game-control.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homework With Service';
  service = new GameControlService();
  randNumber:number|undefined

  buttonClicked() {
    this.randNumber = this.service.getRandomNumber();
    this.service.evenOrOdd(this.randNumber);
  }

}
