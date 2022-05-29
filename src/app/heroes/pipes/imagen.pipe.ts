import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';
import { HeroeComponent } from '../pages/heroe/heroe.component';

@Pipe({
  name: 'imagen',
  //pure: false
})
export class ImagenPipe implements PipeTransform {

  urlBase: string = 'assets/heroes'

  // transform(value: Heroe): string {
  //   return `${this.urlBase}/${value.id ? value.id + '.jpg' : '../no-image.png'}`;
  // }

  transform(heroe: Heroe): string {
    if(!heroe.id && !heroe.alt_image){
      return 'assets/no-image.png'
    } else if (heroe.alt_image) {
      return heroe.alt_image
    } else {
      return `${this.urlBase}/${heroe.id}.jpg`;
    }
  }

}
