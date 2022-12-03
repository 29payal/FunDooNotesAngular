import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserService) {

   }


  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      service: ['advance', Validators.required]
    });
  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.valid) {
      let payload={
        firstName:this.registrationForm.value.firstname,
        lastName:this.registrationForm.value.lastname,
        email:this.registrationForm.value.username,
        password:this.registrationForm.value.password,
        service:"advance"
      }
        this.user.signup(payload).subscribe((response:any)=>{
          console.log(response)
        })
    }
}
}