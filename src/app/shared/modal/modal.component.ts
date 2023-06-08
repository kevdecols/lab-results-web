import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('content') modalContent: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal() {
    this.modalService.open(this.modalContent, {
      ariaLabelledBy: 'modal-title',
      size: 'lg'
    });
  }
}
