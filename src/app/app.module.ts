import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { App } from './app.component';
import { Datos } from './components/datos/datos.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [App, Datos, ProfileComponent, FormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: Datos },
      { path: 'profile', component: ProfileComponent },
      { path: 'form', component: FormComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
