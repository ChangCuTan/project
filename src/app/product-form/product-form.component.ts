import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productForm = this.fb.group({
    colour: ['', Validators.required],
    size: ['', Validators.required]
  });


  @Output() formSent: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    debugger
    if(this.productForm.invalid){

    }else{
      var  productData={
        colour:this.productForm.value.colour,        
        size:this.productForm.value.size
      };
      this.formSent.emit(productData);
    }
  }
}
