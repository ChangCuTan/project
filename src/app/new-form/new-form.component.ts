import { Component,EventEmitter,Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../interface/user.interface';


@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {
  addressForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Z- \']+')]],
    emailAddress: ['', Validators.required]
  });

  @Output() formSent: EventEmitter<any> = new EventEmitter();


  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    debugger
    if(this.addressForm.invalid){

    }else{
      var  userData={
        name:this.addressForm.value.name,        
        emailAddress:this.addressForm.value.emailAddress
      };
      this.formSent.emit(userData);
    }
  }
}

