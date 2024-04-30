import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [MatButtonModule],
  template: `<button mat-button color="accent" background="contrast">
    {{ value }}
  </button>`,
  styles: `button {width: 100px; height: 100px; font-size: 50px}`,
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
}
