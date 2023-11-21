import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { usuarioSinLoguear } from './guards/user-notlogged.guard';
import { usuarioLogueadoGuard } from './guards/user-logged.guard';

const routes: Routes = [
  {
    path:"login",
    canActivate: [usuarioSinLoguear],
    loadChildren: ()=> import('./pages/login/login.module').then(m => m.LoginModule) 
  },
  {
    path:"register",
    canActivate: [usuarioSinLoguear],
    loadChildren: ()=> import('./pages/register/register.module').then(m => m.RegisterModule) 
  },
  {
    path: "view-contacts",
    canActivate: [usuarioLogueadoGuard],
    loadChildren: ()=> import('./pages/view-contacts/view-contacts.module').then(m =>m.ViewContactsModule)
  },
  {
    path: "view-contacts/:id",
    canActivate: [usuarioLogueadoGuard],
    loadChildren: ()=> import('./pages/contact-detail/contact-detail.module').then(m =>m.ContactDetailModule)
  },
  {
    path: "",
    redirectTo: "view-contacts",
    pathMatch: "full"
  },
  {
    path: "**",
    loadChildren: ()=> import('./pages/error/error.module').then(m =>m.ErrorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
