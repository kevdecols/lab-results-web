import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  title = 'lab-results-web';
  options = [
    { label: 'cedula de ciudadania', value: 'cedula' },
    { label: 'tarjeta de identidad', value: 'tarjeta' },
    { label: 'pasaporte', value: 'pasaporte' },
  ];

}
