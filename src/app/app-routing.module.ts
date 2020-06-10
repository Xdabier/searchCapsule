import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchCapsulePageComponent} from './components';


const routes: Routes = [{
  path: '',
  component: SearchCapsulePageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
