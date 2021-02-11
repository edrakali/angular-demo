import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) { return null; }
    let sentence: any;
    sentence = value.toLowerCase().split(' ');
    for (let i = 0; i < sentence.length; i++){
      if ((sentence[i] == 'the' && i == 0)
        || sentence[i] != 'the' && sentence[i] != 'of' && sentence[i][0] != undefined) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
    }
    return sentence.join(' ');
  }

}
