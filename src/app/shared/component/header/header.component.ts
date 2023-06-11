import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationRoute } from '../../constant/navigation-route.constant';
import { AuthStorageService } from '../../service/auth-storage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

export interface RouteLabel {
  route: string;
  optionName: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public optionName = '';
  public userName = '';

  constructor(
    private router: Router, 
    private authStorageService: AuthStorageService,
    private modalService: NgbModal,
    ) { }

  ngOnInit() {
    const user = this.authStorageService.getAuthenticatedUser();
    this.userName = user?.name;
  }
  
  public onLogout() {
    this.authStorageService.clear();
    this.router.navigate([NavigationRoute.AUTH, NavigationRoute.LOGIN]);
  }


  onChangePassword() {

  }

}
