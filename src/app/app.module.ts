import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
imports: [
BrowserModule,
HttpClientModule,
RouterOutlet,
FormsModule
],
declarations: [ AppComponent ],
bootstrap: [ AppComponent ]
})
export class AppModule { }

