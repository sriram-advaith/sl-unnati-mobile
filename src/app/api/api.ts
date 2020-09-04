import { URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Login } from '../login.service';
import { Storage } from '@ionic/storage';
import * as jwt_decode from "jwt-decode";
import { environment } from '../../environments/environment';
import { ErrorHandle } from '../error-handling.service';

import { Http } from '@angular/http';
@Injectable()
export class ApiProvider {
  constructor(
    public storage: Storage,
    public http: Http,
    public login: Login,
    public errorHandle: ErrorHandle
  ) { }

  errorObj = {
    "fallback": "User Details",
    "title": `Error Details`,
    "text": ``
  }

  errorTokenRetryCount: number = 0;
  refershToken(refreshToken) {
    const body = new URLSearchParams();
    body.set('grant_type', "refresh_token");
    body.set('client_id', environment.clientId);
    body.set('client_secret', environment.api_key);
    const obj = 'grant_type=refresh_token&refresh_token=' + refreshToken + "&client_id=" + environment.clientId;
    const url = environment.app_url + environment.keyCloak.getAccessToken;
    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, obj, options);
  }

  validateToken() {
    return new Promise(resolve => {
      return this.storage.get('userDetails').then(data => {
        if (data) {
          if (data.exp <= (Date.now() / 1000)) {
            this.storage.get('userTokens').then(usertoken => {
              this.refershToken(usertoken.refresh_token).subscribe((data: any) => {
                let parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                  let userTokens = {
                    access_token: parsedData.access_token,
                    refresh_token: parsedData.refresh_token,
                    expires_in: parsedData.expires_in
                  };
                  let userDetails = jwt_decode(userTokens.access_token);
                  this.storage.set('userDetails', userDetails).then(userData => {
                  })

                  this.storage.set('userTokens', userTokens).then(data => {
                    resolve(userTokens);
                  })
                  this.storage.set('currentUser', data).then(data => { })
                }
              }, error => {
                this.errorHandle.errorHandle(error);
              })
            })
          } else {
            this.storage.get('userTokens').then(token => {
              resolve(token);
            })
          }
        }
      })
    })
  }
} 
