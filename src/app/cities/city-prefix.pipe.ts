import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityPrefix'
})
export class CityPrefixPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value ? `г. ${value}` : '';
  }

}
