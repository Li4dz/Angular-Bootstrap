import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from '../../app.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppModule
  ],
  declarations: [ LoginComponent ],
  exports : [ LoginComponent ],
  bootstrap : [LoginComponent ]
})

export class LoginModule { }
