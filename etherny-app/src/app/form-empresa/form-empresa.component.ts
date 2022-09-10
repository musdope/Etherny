import { Component, OnInit } from '@angular/core';

//import { CartService } from '../cart.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css']
})
export class FormEmpresaComponent implements OnInit {

  //items = this.cartService.getItems();
  newTaskForm: FormGroup;


  constructor(fb: FormBuilder) {  
    this.newTaskForm = fb.group({
      firstName: new FormControl(),
      Email: new FormControl(),
      form  : new FormControl(),
      outline: new FormControl()
  });
 
  }

  onSubmit(): void {
    console.warn(this.newTaskForm.value);

  }

  ngOnInit(): void {
  }

  

}
