import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from '../../services/api-config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public userService: UserService, private http: HttpClient, private apiService: ApiConfigService, private router: Router) { }

  ngOnInit(): void {}

  logout(): void {
      this.userService.destroy();
      this.router.navigate(['/login']);
  }
}
