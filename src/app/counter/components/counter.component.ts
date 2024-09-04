import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  constructor () {

  }

  public title: string = 'holitas';
  public counter: number = 10;


    increaseBy( value: number): void {
      this.counter += value;
    }

    reset(): void {
      this.counter = 10;
    }


}
