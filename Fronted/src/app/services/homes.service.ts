import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, } from '@angular/http';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs/';
import 'rxjs/add/operator/map';
import 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class HomesService {

  private _getURL = environment.BackendUrl

  constructor(private http: Http) { }

  public getAllUsers() {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this._getURL + `/users`, options)
      .map(res => {
        return <any[]>res.json();
      });
  }

  public registerUser(data) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this._getURL + `/user/register`, data, options)
      .map(res => {
        return <any[]>res.json();
      });

  }

  public profileUpload(data, uid) {
    return this.http.post(this._getURL + `/user/upload?uid=${uid}`, data)
      .map(res => {
        return <any[]>res.json();
      });

  }
  public getProfileImage(uid) {
    return this.http.get(this._getURL + `/user/profile?uid=${uid}`)
      .map(res => {
        return res;
      });

  }


}
