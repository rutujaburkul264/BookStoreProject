import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formbuilder:FormBuilder,private userservice:UserService,private route:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['',Validators.required],
      password: ['',[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{8,}$')]],
      selectedOption: ['',Validators.required]
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.loginForm.valid) {
      let data={
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      
        if(this.loginForm.value.selectedOption == 'User'){
      this.userservice.login(data).subscribe((response:any)=>{
        console.log(response)
        localStorage.setItem('Token',response.result.accessToken);
        this.route.navigateByUrl("/dashboard")
        
      })
    }
    else if(this.loginForm.value.selectedOption == 'Admin'){
      this.userservice.Adminlogin(data).subscribe((response:any)=>{
        console.log(response)
        localStorage.setItem('Token',response.result.accessToken);
        this.route.navigateByUrl("/dashboard/bookList")
      })
    }
    }
    else{
      console.log("Form is invalid")
    }
  }

}
