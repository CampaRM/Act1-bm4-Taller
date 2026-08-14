import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  standalone: false,
  styleUrl: './form.component.scss'
})
export class FormComponent {
  formData = {
    asunto: '',
    mensaje: '',
    suscripcion: false
  };

  enviarFormulario() {
    console.log('Datos enviados desde el formulario:', this.formData);
    alert('¡Formulario enviado con éxito!');
  }
}