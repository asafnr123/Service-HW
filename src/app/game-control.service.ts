import { Injectable } from '@angular/core';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';

@Injectable({
  providedIn: 'root'
})
export class GameControlService {

  evenNumbers = new EvenComponent();
  oddNumbers = new OddComponent();

  evenOrOdd(number:number) {
    if(number % 2 == 0) {
      this.evenNumbers.evenNumbersArr.push(number);
    }
    else {
      this.oddNumbers.oddNumbersArr.push(number);
    }
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  constructor() { }

}
