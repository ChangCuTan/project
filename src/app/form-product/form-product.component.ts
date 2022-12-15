import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {

  productForm = new FormGroup({
    color: new FormControl(""),
    size: new FormControl(""),
  });

  
}
