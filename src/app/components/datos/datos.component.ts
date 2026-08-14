import { Component } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  balance: number;
  isActive: boolean;
}

@Component({
  selector: 'app-datos',
  standalone: false,
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.scss',
})
export class Datos {
  private names = ['Ana Fuentes', 'Carlos Gonzales', 'María Alvarez', 'Juan Lopez', 'Sofía Aguirre', 'Luis Torres','Jaime Martinez','Pablo Cajchun','Cristian Perez','Luis Argueta','Jaime Cajchun','Pablo Martinez','Jorge Juarez'];
  private roles = ['Administrador(a)', 'Desarrollador(a)', 'Diseñador(a)', 'Analista', 'Tester','Conserje','RRHH'];

  public currentUser: User = this.generateRandomUser();

  public generateRandomUser(): User {
    const randomName = this.names[Math.floor(Math.random() * this.names.length)];
    const randomRole = this.roles[Math.floor(Math.random() * this.roles.length)];
    const randomNumber = Math.floor(Math.random() * 1000);

    return {
      id: randomNumber,
      name: randomName,
      email: `${randomName.toLowerCase().replace(' ','')}@gmail.com`,
      role: randomRole,
      balance: parseFloat((Math.random() * 5000).toFixed(2)),
      isActive: Math.random() > 0.3
    };
  }

  public refreshData(): void {
    this.currentUser = this.generateRandomUser();
  }
}