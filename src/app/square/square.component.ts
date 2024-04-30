import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  template: `<button>{{ value }}</button>`,
  styles: `button {width: 100px; height: 100px; font-size: 50px}`,
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
}
