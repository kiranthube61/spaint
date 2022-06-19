import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ShoppingService } from 'src/app/service/shopping.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList:any;
  totalItemNumber:number=0;
  

  constructor(private api:ShoppingService ,private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getProductData().subscribe(res=>{
      this.totalItemNumber=res.length;
    })


    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      });
    })
  }
  addtoCart(item:any){
    this.cart.addToCart(item);
    


  }

}
