import {Component} from '@angular/core';

@Component({
  selector: 'app-number-formatter-cell',
  template: `
    <span>{{params.value | currency:'GBP'}}</span>
  `
})
export class NumberFormatterComponent {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }
}
