import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  template: `<button>{{ value }}</button>`,
  styles: `button {width: 200px; height: 200px; font-size: 100px}`,
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
}
