import { Pipe, PipeTransform } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {
  transform(value: string): string {
    const titlecasePipe = new TitleCasePipe();
    return titlecasePipe.transform(value);
  }
}
