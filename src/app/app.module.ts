import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';

import { HeroService } from './hero.service';
import { HeroSearchService } from './hero-search.service';
import { Logger } from './logger.service';

@NgModule({
  // other modules whose exported classes are needed by component templates
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  // the view classes that belong to this module
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  //  services; they become accessible in all parts of the app
  providers: [
    Logger,
    HeroService,
    HeroSearchService
  ],
  // the main application view, called the root component, that hosts all other app views
  bootstrap: [ AppComponent ]
})
export class AppModule {}

// simple func that logs
export function lg(msg: any) {
  console.log(msg);
}

