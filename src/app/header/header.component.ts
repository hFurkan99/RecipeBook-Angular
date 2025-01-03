import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  collapsed = true;
  @Output() activePage = new EventEmitter<string>();

  setActivePage(pageName: string) {
    this.activePage.emit(pageName);
  }
}
