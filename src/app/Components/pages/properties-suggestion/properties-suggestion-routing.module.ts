import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesSuggestionComponent } from './properties-suggestion.component';

const routes: Routes = [
  {
    path: '',
    component: PropertiesSuggestionComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesSuggestionRoutingModule { }
