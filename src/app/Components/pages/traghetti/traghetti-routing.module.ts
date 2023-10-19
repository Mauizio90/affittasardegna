import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraghettiComponent } from './traghetti.component';

const routes: Routes = [{ path: '', component: TraghettiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraghettiRoutingModule { }
