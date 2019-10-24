import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private _auth: AuthService, private formBuild: FormBuilder, private rout: Router) { 
    this.form = this.formBuild.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  Login() {
    let datos = this.form.value
    this._auth.login()
    .subscribe(res => {
        res.forEach(element => {
          if(element.email === datos.email && element.password === datos.password){
            this.rout.navigate(['/tienda'])
          }
        });
      }
    )
  }

  ngOnInit() {
  }

}
