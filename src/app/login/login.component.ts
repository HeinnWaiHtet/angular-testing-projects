import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean = true; 

  constructor(
    private router: Router, 
    private authService: AuthService) { }

  signIn(credentials : boolean) {
    this.authService.login(credentials)
      .subscribe((result : any)=> { 
        if (result)
          this.router.navigate(['/']);
        else  
          this.invalidLogin = true; 
      });
  }
}
