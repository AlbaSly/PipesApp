import { Component } from '@angular/core';
import { Color, Hero } from 'src/app/core/interfaces/hero.interface';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.scss']
})
export class CustomPageComponent {

  public isUpperCase: boolean = false;

  public heroes: Array<Hero> = [
    {
      name: "Superman",
      canFly: true,
      color: Color.blue
    },
    {
      name: "Batman",
      canFly: false,
      color: Color.black,
    },
    {
      name: "Flash",
      canFly: false,
      color: Color.red,
    },
    {
      name: "Green Arrow",
      canFly: false,
      color: Color.green,
    },
    {
      name: "Shazam",
      canFly: true,
      color: Color.red,
    },
  ]

  public currentFilter: keyof Hero | null = null;

  toggleCaseStatus(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  sortItems(key: keyof Hero): void {
    this.currentFilter = key;
  }
}