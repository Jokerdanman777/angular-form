import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public formModel: FormGroup;

  public constructor(
    private _fb: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.formModel = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.minLength(4)]],
      passwordGroup: this._fb.group({
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
        cpassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]]
      })
    });
  }

  public show(value: any): void {
    console.log(value);
  }

}
