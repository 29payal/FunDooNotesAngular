import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit {
  forgotPasswordform!: FormGroup;
submitted = false;
constructor(private formBuilder: FormBuilder, private user: UserService) {

 }

 ngOnInit(): void {
 this.forgotPasswordform  = this.formBuilder.group({
email: ['', [Validators.required, Validators.email]],
service: ['advance', Validators.required]
});
 }

 onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.forgotPasswordform.valid) {
    let payload={
      email:this.forgotPasswordform.value.email,
      service:"advance"
    }
      this.user.forget(payload).subscribe((response:any)=>{
        console.log(response)
      })
  }
}
}

