import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, } from '@angular/http';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs/';
import { map, filter, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _getURL = environment.BackendUrl;
  constructor(private http: Http) { }
}
