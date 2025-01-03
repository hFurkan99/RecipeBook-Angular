import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'RecipeBook-Angular';
  activePageName: string = 'recipe';
  onSetActivePage(activePageName: string) {
    this.activePageName = activePageName;
  }
}
