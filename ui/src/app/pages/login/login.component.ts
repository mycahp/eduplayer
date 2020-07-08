import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from 'src/app/shared/services/api-config.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: String;
  public password: String;
  public error: string;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private apiConfigService: ApiConfigService, private userService: UserService) { }

  ngOnInit(): void {}

  login(): void {
    this.error = null;
    if (!this.username || !this.password) {
      this.error = "Please enter both a username and password.";
      return;
    }

    this.route.queryParamMap.subscribe(async (params) => {
      this.http.post(`${this.apiConfigService.apiURL}/authenticate/`, { username: this.username, password: this.password }).subscribe((response: {username: String, type: String}) => {
        this.userService.setUserInfo(response);
        console.log(this.userService.currentUser);

        this.router.navigate(['/teaching-staff']);
      }, (response) => {
        this.error = response.error.error;
      });
    });
  }
}
