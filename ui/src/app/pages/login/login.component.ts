import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.route.queryParamMap.subscribe((params) => {
      if (params.get('type') === 'teaching') {
        this.router.navigate(['teaching-staff']);
      } else {
        this.router.navigate(['student']);
      }
    });
  }
}
