import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div class="header-container" height="100px">
      <img src="./favicon.svg" alt="logo" height="100px" class="header-icon" />
      <h1>My Pets</h1>
    </div>
  `,
  styles: `
    .header-container {
      max-height: 100px;
      display: flex;
      align-items: center;
      padding: 1.5rem;
      gap: 0.5rem;
      background-color: rgb(194, 249, 251);
    }
  `,
})
export class HeaderComponent {}
