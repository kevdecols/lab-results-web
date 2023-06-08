import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],

  providers: [NgbModalConfig, NgbModal],
})
export class SidebarComponent implements OnInit {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content: any) {
    this.modalService.open(content);
  }
  isSidebarOpen = false;

  ngOnInit(): void {
    this.initializeModal();
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  initializeModal(): void {
    $(document).ready(function () {
      $('#exampleModalLong').modal({
        show: false
      });
    });
  }
}
