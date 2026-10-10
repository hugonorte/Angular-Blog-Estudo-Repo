import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NavMenuComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial-blog';
}
