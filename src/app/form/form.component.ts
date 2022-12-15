import { Component, ɵsetClassMetadata } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  formUserPass: boolean= false;
  
  profileForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z-’]")]),
    emailAddress: new FormControl(null, Validators.required),
    // color: new FormControl(""),
    // size: new FormControl(""),
  });

  onSubmit(){
    if(this.profileForm.invalid){

    }else{
      // goto productForm


    }

  }
  
//   onClickSubmit(result) {
//     console.log("You have entered : " + result.name); 
//  }
}

