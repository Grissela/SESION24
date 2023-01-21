import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './components/dialog/dialog.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './material/dashboard/dashboard.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'dialog', component:DialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
