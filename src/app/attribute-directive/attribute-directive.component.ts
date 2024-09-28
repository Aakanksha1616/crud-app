import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent {
  products:Product[] =[
    {productName:"Laptop", price:60000 , quantity:2},
    {productName:"POCO X2", price:30000 , quantity:4},
    {productName:"One Plus Nord", price:55000 , quantity:2},
    {productName:"LED TV", price:100000 , quantity:5}
]

}
interface Product {
 productName:string;
 price:number;
 quantity:number;
}

