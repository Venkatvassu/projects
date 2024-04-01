import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBedsComponent } from './all-beds/all-beds.component';
import { BedSheetsComponent } from './bed-sheets/bed-sheets.component';
import { PillowsComponent } from './pillows/pillows.component';
import { CoversProtectersComponent } from './covers-protecters/covers-protecters.component';
import { ComportersComponent } from './comporters/comporters.component';
import { DuvetComponent } from './duvet/duvet.component';
import { QuiltsRajaiComponent } from './quilts-rajai/quilts-rajai.component';


@NgModule({
  declarations: [
    AppComponent,
    AllBedsComponent,
    BedSheetsComponent,
    PillowsComponent,
    CoversProtectersComponent,
    ComportersComponent,
    DuvetComponent,
    QuiltsRajaiComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
