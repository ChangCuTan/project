import { Component } from '@angular/core';
import { Product } from './interface/product.interface';
import { User } from './interface/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  userData = {
    name: "",
    emailAddress: ""
  }

  productData={
    colour:"",
    size:""
  }

  isUserFormSent = false;  
  isProductFormSent = false;

  onFormUserSent(value:any) {
    debugger
    this.isUserFormSent = true;
    this.userData.name=value.name;
    this.userData.emailAddress=value.emailAddress;
  }
  
  onFormProductSent(value:any) {
    this.isProductFormSent = true;
    this.productData.colour=value.colour;
    this.productData.size=value.size;


  }

}
