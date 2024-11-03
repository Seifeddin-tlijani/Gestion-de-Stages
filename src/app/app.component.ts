import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor (public authService: AuthService , private router:Router) {}
  
  title = 'MesStages';

 
 
    ngOnInit() {
      this.authService.loadToken();
      if (!this.authService.getToken() || this.authService.isTokenExpired()) {
          this.router.navigate(['/login']);
      }
  }

  
  onLogout() {
    this.authService.logout();
  }
  
    
  
}
