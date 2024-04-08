import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <div class="footer-container">
      <p>© My Pets.</p>
    </div>
  `,
  styles: `
    .footer-container {
      display: flex;
      justify-content: end;
      align-items: center;
      background-color: rgb(30, 94, 110);
      height: 80px;
      padding: 1.5rem;
    }
  `,
})
export class FooterComponent {}
