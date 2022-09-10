import { Component, OnInit } from '@angular/core';

//import { CartService } from '../cart.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css']
})
export class FormEmpresaComponent implements OnInit {

  //items = this.cartService.getItems();
  newTaskForm: FormGroup;
  postId;

  constructor(fb: FormBuilder,private http: HttpClient) {  
    this.newTaskForm = fb.group({
      firstName: new FormControl(),
      Email: new FormControl(),
      form  : new FormControl(),
      outline: new FormControl()
  });
  
  this.postId = 0;
 
  }

  onSubmit(): void {
      console.log( this.newTaskForm.value);
      this.newTaskForm.reset();
      this.http.post<any>('http://localhost:3000/newKitty',this.newTaskForm.value).subscribe(data => {
        console.log(data);
    })
}



  ngOnInit(): void {
  }

  

}
