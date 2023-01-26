import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './components/planet-search/components/search-input/search-input.component';
import { TableComponent } from './components/planet-search/components/table/table.component';
import { PlanetSearchComponent } from './components/planet-search/planet-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetSearchComponent,
    SearchInputComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
