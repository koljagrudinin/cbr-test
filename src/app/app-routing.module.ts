import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetSearchComponent } from './components/planet-search/planet-search.component';

const routes: Routes = [
  {
    path: 'filter',
    component: PlanetSearchComponent
  },
  {
    path: '**',
    redirectTo: '/filter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
