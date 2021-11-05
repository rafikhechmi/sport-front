import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch: string) {
    let inter = '';
    let result = '';
    const voyels = ['a', 'e', 'u', 'i', 'o', 'y'];
    for (let i = 0; i < ch.length; i++) {
    for (let j = 0; j < voyels.length; j++) {
      if (ch[i] === voyels[j]) {
    inter = '*';
    break;

      } else {
        inter = ch[i];
      }
    }
    result = result + inter ;
    }
    return result;

  }

}
