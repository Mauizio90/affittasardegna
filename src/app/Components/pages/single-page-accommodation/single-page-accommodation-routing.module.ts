import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePageAccommodationComponent } from './single-page-accommodation.component';

const routes: Routes = [
  {
    path:'',
    component: SinglePageAccommodationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinglePageAccommodationRoutingModule { }
