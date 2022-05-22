import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vowelSubstitute',
})
export class VowelSubstitutePipe implements PipeTransform {
  private readonly substitutes: any = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
    A: '6',
    E: '7',
    I: '8',
    O: '9',
    U: '10',
  };

  transform(value: string): string {
    return value
      .split('')
      .map((v: string) => this.substitutes[v] || v)
      .join('');
  }
}
