import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authStatusSource = new BehaviorSubject<boolean>(false);
  authStatus$ = this.authStatusSource.asObservable();
 
  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
    }
    getUserRoles(username :string){
      this.users.forEach((curUser) => {
      if( curUser.username == username ) {
      this.roles = curUser.roles;
      }
      });
      }

  users: User[] = [{"username":"admin","password":"123","roles":['ADMIN']},
{"username":"seif","password":"123","roles":['USER']} ];


private helper = new JwtHelperService();
public loggedUser!:string;
public isloggedIn: Boolean = false;
public roles!:string[];

token!:string;
apiURL: string = 'http://localhost:8081/users';

constructor(private router: Router , private http : HttpClient) { }

// login(user : User)
// {
// return this.http.post<User>(this.apiURL+'/login', user , {observe:'response'});
// }

login(user: User) {
  return this.http.post<User>(this.apiURL+'/login', user, {observe:'response'}).pipe(
    tap(() => this.authStatusSource.next(true))
  );
}

  saveToken(jwt:string){
    localStorage.setItem('jwt',jwt);
    this.token = jwt;
    this.isloggedIn = true;
    this.decodeJWT();
    }

decodeJWT()
{
   if (this.token == undefined)
return;
  const decodedToken = this.helper.decodeToken(this.token);
  this.roles = decodedToken.roles;
  this.loggedUser = decodedToken.sub;
}


  loadToken() {
    this.token = localStorage.getItem('jwt')!;
    this.decodeJWT();

    }
    getToken():string {
    return this.token;
    }
    // logout() {
    //   console.log("Logging out...");
    //   localStorage.removeItem('jwt'); 
    //   console.log("JWT token removed:", !localStorage.getItem('jwt'));
    //   this.loggedUser = undefined!;
    //   this.roles = undefined!;
    //   this.token= undefined!;
    //   this.isloggedIn = false;
    //   localStorage.removeItem('jwt');
    //   this.router.navigate(['/login']);

    //   setTimeout(() => this.router.navigate(['/login']), 100);

    //   }

    logout() {
      try {
          localStorage.removeItem('jwt');
          this.loggedUser = undefined!;
          this.roles = undefined!;
          this.token = undefined!;
          this.isloggedIn = false;
            this.authStatusSource.next(false);

          console.log("JWT token removed:", !localStorage.getItem('jwt'));
          this.router.navigate(['/login']);
      } catch (error) {
          console.error("Error during logout:", error);
      }
  }



  // SignIn(user :User):Boolean{
  // let validUser: Boolean = false;
  // this.users.forEach((curUser) => {
  // if(user.username== curUser.username && user.password==curUser.password) {
  // validUser = true;
  // this.loggedUser = curUser.username;
  // this.isloggedIn = true;
  // this.roles = curUser.roles;
  // localStorage.setItem('loggedUser',this.loggedUser);
  // localStorage.setItem('isloggedIn',String(this.isloggedIn));
  // }
  // });
  // return validUser;
  // }


  isAdmin():Boolean{
    if (!this.roles)
    return false;
    return this.roles.indexOf('ADMIN') >=0;
    }

    isTokenExpired(): Boolean
{
return this.helper.isTokenExpired(this.token); }

isLoggedIn(): boolean {
  return this.authStatusSource.getValue();
}



}
