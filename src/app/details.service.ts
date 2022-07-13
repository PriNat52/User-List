import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DetailsService {
  path = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  details() {
    return this.http.get(this.path);
  }

  fullDetails(name: any) {
    return this.http.get(this.path);
  }
}
