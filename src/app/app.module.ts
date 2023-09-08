import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { C19CountryStatsComponent } from './components/c19-country-stats/c19-country-stats.component';
import { C19WorldStatsComponent } from './components/c19-world-stats/c19-world-stats.component';
import { VaccinationDetailsComponent } from './components/vaccination-details/vaccination-details.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    C19CountryStatsComponent,
    C19WorldStatsComponent,
    VaccinationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  /** Project URL: https://covid-nineteen-data.netlify.app/c19-statistics */
}


