import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {
  firstName: string = "Steve";
  mobileNo: string = "";

  //  changeName(){
  //   this.firstName="John";
  //  }

  //  fNameChange(event:any){
  //   this.firstName= event.target.value
  //  }

  save() {
    console.log("Name :" + this.firstName);
    console.log("mobile No :" + this.mobileNo);
  }
  ptoductObj: Product = new Product();

  calculateTotalPrice() {
    if (this.ptoductObj.price != undefined && this.ptoductObj.quantity != undefined) {
      this.ptoductObj.totalPrice = this.ptoductObj.price * this.ptoductObj.quantity
    }
  }

  saveProduct(){
      console.log("product ", this.ptoductObj)
  }
}
class Product {
  price: number | undefined;
  quantity: number | undefined;
  totalPrice: number | undefined;
}

