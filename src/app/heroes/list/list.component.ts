import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public deletedHeroe?: string;

  public heroNames: string[] = ['Harley queen', 'Ivy poison', 'Wonder woman', 'Super girl']

  removeLastHero (): void {
    this.deletedHeroe = this.heroNames.pop();
  }

}
