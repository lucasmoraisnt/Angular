import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { CssComponentComponent } from './components/css-component/css-component.component';
import { ParentsDataComponent } from './components/parents-data/parents-data.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    CssComponentComponent,
    ParentsDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
