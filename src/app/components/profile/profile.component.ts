import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: false,
  styleUrl: './profile.component.scss'
})

export class ProfileComponent {
  userProfile = {
    nombre: 'Brayan Campa',
    rol: 'EStudiante',
    email: 'brayancampa56@ejemplo.com',
    ubicacion: 'Cdad de Guatemala, Guatemala',
    biografia: 'Estudiante de 5to perito en informatica, del centro tecnico laboral Kinal.',
    habilidades: ['Comer', 'Dormir', 'Perder fisica', 'ser pobre', 'Git']
  };
} 