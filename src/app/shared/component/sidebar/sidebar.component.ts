import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationRoute } from '../../constant/navigation-route.constant';
import { AuthStorageService } from '../../service/auth-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  public routes = NavigationRoute;

  constructor(
    private authStorageService: AuthStorageService
  ) { }

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);


}
