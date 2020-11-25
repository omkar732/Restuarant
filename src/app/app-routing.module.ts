import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestuarantComponent } from './add-restuarant/add-restuarant.component';
import { HomeComponent } from './home/home.component';
import { ListRestuarantComponent } from './list-restuarant/list-restuarant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestuarantComponent } from './update-restuarant/update-restuarant.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"add",component:AddRestuarantComponent},
  {path:"update/:id",component:UpdateRestuarantComponent},
  {path:"list",component:ListRestuarantComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
