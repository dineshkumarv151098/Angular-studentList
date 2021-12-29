import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './directive/highlight.directive';
import { MainComponent } from './main/main.component';
import { routing } from './app.router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentListComponent } from './student-list/student-list.component';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Root Module
@NgModule({
  declarations: [
    //directives,components,pipes etc.,
    AppComponent,
    HighlightDirective,
    MainComponent,
    PageNotFoundComponent,
    StudentListComponent,
    LogInComponent,
  ],
  imports: [
    //angular modules and third party modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    // import HttpClientModule after BrowserModule
    HttpClientModule,
  ],
  exports: [],
  providers: [], //services
  bootstrap: [AppComponent],
})
export class AppModule {}
