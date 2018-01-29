import { Pipe, PipeTransform } from '@angular/core';
import {DecimalPipe} from '@angular/common';


@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {
  transform(value: number, unidade?: string): any {
    console.log('value: ', value);
    console.log('unidade: ', unidade);
    const decimalPipe = new DecimalPipe('en');
    if (value < 1000) {
      return `${ decimalPipe.transform(value, '2.1-1')}m`;
    } else {
      return `${ decimalPipe.transform(value / 1000, '2.1-1')}km`;
    }
  }
}
