import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {List_countriesComponent} from './countries/list_countries/list_countries.component';

const routes: Routes = [
  { path: 'countries', component: List_countriesComponent },
  { path: '**', redirectTo: 'countries', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
