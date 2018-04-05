import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  login({username, password}: { username: string, password: string }): Observable<any> {
    return this.http.post(`/api/users/login`, {username, password});
  }

}
