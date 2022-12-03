import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})

export class ResetPasswordComponent implements OnInit {
  resetPasswordForm !: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserService) {

   }

   ngOnInit(): void {
   this.resetPasswordForm  = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    service: ['advance', Validators.required]
  });
   }

   onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetPasswordForm.valid) {
      let payload={
        password: this.resetPasswordForm.value.password,
        confirmPassword: this.resetPasswordForm.value.confirmPassword,
        service: "advance"
      }
        this.user.reset(payload).subscribe((response:any)=>{
          console.log(response)
        })
    }
}
}