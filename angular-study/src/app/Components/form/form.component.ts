import { Component, OnInit, } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(testForm: any){
    console.log(testForm)
  }

}
