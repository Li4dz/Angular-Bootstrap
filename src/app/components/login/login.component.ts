import { Component, OnInit, transition } from '@angular/core';
import { Router } from "@angular/router";
import { BoundElementPropertyAst } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
   

  constructor(private router : Router) { }

  ngOnInit() {
  }

  login(){
    console.log("Login works");
    Logged = true;
    this.router.navigate(['/dashboard']);
  }

 
}

export var Logged:boolean;


