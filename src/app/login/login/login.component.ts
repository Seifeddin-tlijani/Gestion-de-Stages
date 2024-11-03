import { Component } from '@angular/core';
import { User } from '../../model/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService : AuthService,
    private router: Router) { }

    err:number = 0;
    erreur=0;

  user = new User();

  // onLoggedin(){
  //   console.log(this.user);
  //   let isValidUser: Boolean = this.authService.SignIn(this.user);
  //   if (isValidUser)
  //   this.router.navigate(['/']);
  //   else
  //   // alert('Login ou mot de passe incorrecte!');
  //   this.erreur = 1;
  //   }

//     onLoggedin()
// {
// this.authService.login(this.user).subscribe((data)=> {
// let jwToken = data.headers.get('Authorization');
// this.authService.saveToken(jwToken)|| '';
// this.router.navigate(['/']);
// },(erreur)=>{ this.err = 1;
// });
// }

onLoggedin() {
  this.authService.login(this.user).subscribe((data) => {
      const jwToken = data.headers.get('Authorization');
      if (jwToken) {
          this.authService.saveToken(jwToken);
      }
      this.router.navigate(['/']);
  }, (error) => {
      this.err = 1;
  });
}


}
