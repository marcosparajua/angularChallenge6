import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormComponent } from './features/form/form.component';
import { ListComponent } from './features/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    ListComponent,
  ],
  template: `
    <div class="container">
      <app-header></app-header>
      <app-form></app-form>
      <app-list></app-list>
      <app-footer></app-footer>
    </div>
  `,
  styles: `
    .container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: space-between;
    }
  `,
})
export class AppComponent {
  title = 'signalsList';
}
