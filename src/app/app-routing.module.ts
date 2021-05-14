import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProtectComponent } from './protect/protect.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent },
  {path: 'protect', component: ProtectComponent },
  {path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
