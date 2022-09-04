import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  connexion: string;
  constructor(private authService: AuthenticationService) { 
   
  }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()) this.connexion = 'Logout';
    else this.connexion = 'Login';
  }

  logout(): void {
    this.authService.logout();
  }
}
