import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    firstName: null,
    lastName: null,
    emailAddress: null,
    username: null,
    password: null,
    confirmPasword: null
  }

  isSignUpFailed = false;
  errorMessage = "";

  constructor(private authService: AuthService, private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {
      firstName,
      lastName,
      emailAddress,
      username,
      password,
      confirmPasword
    } = this.form;

    this.authService.register(username, password, emailAddress, firstName + lastName).subscribe({
      next: data => {
        console.log(data);
        this.isSignUpFailed = false;
        this.goToHome();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    })

  }

  goToHome(): void {
    this.router.navigate(['/login']);
  }

}
