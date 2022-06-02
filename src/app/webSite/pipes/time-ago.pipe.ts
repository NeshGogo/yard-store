import { Pipe, PipeTransform } from '@angular/core';
import { differenceInDays } from 'date-fns';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date,): number {
    const diff = differenceInDays(value, new Date());
    return diff;
  }

}
