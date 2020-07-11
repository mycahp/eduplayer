import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) { }

  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    let token;

    if (this.userService.currentUser) {
      token = this.userService.currentUser.token;
    } else {
      token = null;
    }

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", token)
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
