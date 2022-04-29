import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  urlBase: string = 'assets/heroes'

  transform(value: Heroe): string {
    return `${this.urlBase}/${value.id ? value.id + '.jpg' : '../no-image.png'}`;
  }

}
