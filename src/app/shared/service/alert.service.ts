import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public showSuccessful(message: string, title?: string) {
    return this.showWithIcon(message, 'success', title);
  }

  public showWarning(message: string, title?: string) {
    return this.showWithIcon(message, 'warning', title);
  }

  public showError(message: string, title?: string) {
    return this.showWithIcon(message, 'error', title);
  }

  private showWithIcon(message: string, messageType: SweetAlertIcon, title?: string) {
    return Swal.fire({
      title: title,
      //text: message,
      html: message,
      icon: messageType,
      showCloseButton: true,
      showConfirmButton: false
    });
  }


  public showConfirmation(message: string, title?: string) {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    });
  }

}
