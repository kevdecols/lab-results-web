import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
