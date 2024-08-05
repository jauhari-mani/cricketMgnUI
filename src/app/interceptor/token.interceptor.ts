import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { UserServiceService } from '../services/user-service.service';
import { catchError } from 'rxjs/operators';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private userService: UserServiceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let authReq = request;
    const token = this.userService.getToken();
    if(token != null){
      authReq = request.clone({
        setHeaders:{Authorization : `Bearer ${token}`}
      });
    }
    return next.handle(authReq)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        localStorage.removeItem("token");
        return EMPTY;
      })
    );

  }
}

export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
];
