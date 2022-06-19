import { HttpClient } from '@angular/common/http';
// import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartDataList:any=[];
  productList=new BehaviorSubject<any>([]);
  // removeAllCart: any;
  url1="http://20.36.8.75:8000/pay/A5D3C52FE1004C1E9BC6A7F5A66D1C82"

  constructor(private http:HttpClient) { }

  getProductData(){
    return this,this.productList.asObservable();
  }
  // set product data
    setProduct(product:any){
      this.cartDataList.push(...product);
      this.productList.next(product)

    }
    // add to cart details
    addToCart(product:any){
      this.cartDataList.push(product);
      this.productList.next(this.cartDataList);
      this.getTotalAmount();
    }
    // get total amount
    getTotalAmount(){
      let grandTotal=0;
      this.cartDataList.map((a:any)=>{
        grandTotal +=parseInt(a.total);   
      })
      return grandTotal;
    }
    // remove cart data one by one
    removeCartData(product:any){
      this.cartDataList.map((a:any,index:any)=>{
        if(product.id===a.id){
          this.cartDataList.splice(index,1)
        } 
      })
      // cart notification action
      this.productList.next(this.cartDataList)
    }

    // remove all cart
    removeAllCart(){
      this.cartDataList=[]
      this.productList.next(this.cartDataList)
    }

    postdata(data: any){
      console.log("service",data)
     return this.http.post(this.url1,data)
    }

}
