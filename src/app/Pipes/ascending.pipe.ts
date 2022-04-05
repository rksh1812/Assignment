import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ascending'
})
export class AscendingPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // return value;

    if(Array.isArray(value)){
      value = value.sort();
    }

    return value;
  }

  

}
