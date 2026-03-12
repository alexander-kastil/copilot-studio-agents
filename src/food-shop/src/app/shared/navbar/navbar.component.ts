import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { sidenavStore } from '../../state/sidenav/sidenav.store';
import { NavItem } from './nav-item.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    MatToolbarModule,
    MatIconModule,
    RouterLinkActive,
    RouterLink,
    AsyncPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  http = inject(HttpClient);
  store = inject(sidenavStore);
  menuItems = this.http.get<NavItem[]>('/assets/nav-items.json');

  toggleMenu() {
    this.store.toggleSideNav();
  }
}
