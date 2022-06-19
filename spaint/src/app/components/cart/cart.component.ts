import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
declare var AtomPaynetz: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:any=[];
  allProducts:any=0;
  showme:boolean=true;
  
  

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getProductData().subscribe(res=>{
      this.products=res;
      this.allProducts=this.cart.getTotalAmount();
      console.log(this.allProducts, "hel");
    })
    
  }
  removeProduct(item:any){
    this.cart.removeCartData(item);
  }
  removeAllProduct(){
     this.cart.removeAllCart();
  }
    // payment gateway
  collectdata(data:any) {
    // console.log(data)
    this.cart.postdata(data).subscribe((result)=>{
      console.warn(result)
      if(result){
        let amount= '10.00';
            let custEmail = 'test@atomtech.in';
            let custMobile = '8888888888';
            let returnUrl = 'http:/20.36.8.75:8000/paymentStatus/A5D3C52FE1004C1E9BC6A7F5A66D1C82';  
            let button = document.getElementsByClassName("btn");
        const options = {
          'atomTokenId': result,
          'merchId': '8952',
          'custEmail': custEmail,
          'custMobile': custMobile,
          'returnUrl': returnUrl
      }
      let atom = new AtomPaynetz(options, 'uat')
      }
    })
    

  }
  toggle(){
    this.showme=!this.showme
  }
  

}
