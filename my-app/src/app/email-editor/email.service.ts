import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse, HttpRequest} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {map, catchError} from'rxjs/operators';
import {Email} from './email-editor';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {}

  /*getBookById(emailId: string): Observable<Email>{
    return this.http.get<Email>("http://localhost:8037/spring-mvc-restfull-crud-example/email/"+emailId)

  }*/

  addEmail(email: Email) {
    let body = JSON.parse(JSON.stringify({name: email.name, email: email.email, message: email.message}));
    console.log(body);
    return this.http.post("http://localhost:8080/spring-mvc-restfull-crud-example/email/", body, httpOptions);

  }

  private handleError(error: Response){
    return throwError(() => new Error("error"));
  }
}
