import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css']
})
export class DirectivePracticeComponent {
// ngIf example
age:number = 18;
isShow:boolean = false;

displayMoreContent(){
 this.isShow = true;
}

removeContent(){
  this.isShow = false;
}

//=================================================
isLoggedIn:boolean=false;
login(){
 this.isLoggedIn = true;
}

logout(){
  this.isLoggedIn = false;
}

}
