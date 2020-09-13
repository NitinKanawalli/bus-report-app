import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strongifyNumber'
})
export class StrongifyNumberPipe implements PipeTransform {

  transform(initialString: string, ...args: any[]): any {
    let strongifyNumberString = initialString;
    if (initialString !== 'UNKNOWN') {
      strongifyNumberString = '<strong>' + initialString.slice(0, 3) + '</strong>' + initialString.slice(3, 7);
    }
    return strongifyNumberString;
  }
}
