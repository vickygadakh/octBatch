import { Directive } from '@angular/core';
import { NumbersOnlyDirective } from './numbers-only.directive';

describe('NumbersOnlyDirective', () => {
  it('should create an instance', () => {
    const newLocal = new NumbersOnlyDirective();
    expect(Directive).toBeTruthy();
  });
});
