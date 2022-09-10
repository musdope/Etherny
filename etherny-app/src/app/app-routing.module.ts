import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';

const routes: Routes = [

  { path: 'home-component', component: HomeComponent },
  { path: 'form-component', component: FormEmpresaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
