import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
// Assignment 1
num1:number=0;
num2:number=0;
result:number=0;

add(){
  this.result = +this.num1 + +this.num2
}

sub(){
  this.result = this.num1 - this.num2
}

mult(){
  this.result = this.num1 * this.num2
}

div(){
  // this.result = this.num1 / this.num2
  if (this.num2 !== 0) {
    this.result = this.num1 / this.num2;
  } else {
    alert("error: division by zero");
  }

}

// assignment 2

price: number = 0;
quantity: number = 0;
discount: number = 0;
totalPrice: number = 0;

updateTotalPrice() {
  this.totalPrice = (this.price * this.quantity) - this.discount;
}

// assignment 3

person:any = {
  name: "",
  mobileNo: "",
  dob: "",
  age: ""
};

calculateAge() {
  if (this.person.dob) {
    const birthDate = new Date(this.person.dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    this.person.age = age.toString();
  } else {
    this.person.age = '';
  }
}



}






