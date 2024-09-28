import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-ng-for-directive',
  templateUrl: './structural-ng-for-directive.component.html',
  styleUrls: ['./structural-ng-for-directive.component.css']
})
export class StructuralNgForDirectiveComponent {

courses:string[] = ["Angular Developer","Java Developer", "Javascript Developer", "Typescript Developer","Python Developer"]

products:Product[] =[
     {productName:"Laptop", price:60000 , quantity:2},
     {productName:"POCO X2", price:30000 , quantity:1},
     {productName:"One Plus Nord", price:55000 , quantity:2},
     {productName:"LED TV", price:100000 , quantity:1}
]

}
interface Product {
  productName:string;
  price:number;
  quantity:number;
}



