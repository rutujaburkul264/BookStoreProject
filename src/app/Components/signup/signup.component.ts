import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;

  constructor(private formbuilder:FormBuilder, private userservice:UserService) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      fullName: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      mobileNo: ['',Validators.required],
      selectedOption: ['',Validators.required],
      service: "advance"
    })
  }
  get f() { return this.signupForm.controls; }
  
  onSubmit(){
    this.submitted = true;
    if (this.signupForm.valid) {
      let data={
        fullName: this.signupForm.value.fullName,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        phone: this.signupForm.value.mobileNo,
        service: this.signupForm.value.service
      }
      console.log(this.signupForm.value)
      
        if(this.signupForm.value.selectedOption == 'User'){
      this.userservice.Signup(data).subscribe((response: any)=>{
        console.log(response)
      })
    }
    else if(this.signupForm.value.selectedOption == 'Admin'){
      this.userservice.AdminSignup(data).subscribe((response:any)=>{
        console.log(response)
      })
    }
    }
    else{
      console.log("Form is invalid")
    }
  }
}
