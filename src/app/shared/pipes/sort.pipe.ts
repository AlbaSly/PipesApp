import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from 'src/app/core/interfaces/hero.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero | null): Hero[] {
    switch(sortBy) {
      case 'name':
        return heroes.sort((a,b) => (a.name > b.name) ? 1 : -1)
      case 'canFly':
        return heroes.sort((a,b) => (a.canFly > b.canFly) ? 1 : -1).reverse()
      case 'color':
          return heroes.sort((a,b) => (a.color > b.color) ? 1 : -1)
      default:
        return heroes;
    }
  }

}
