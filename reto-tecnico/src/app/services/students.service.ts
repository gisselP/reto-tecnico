import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private Url = "https://jsonplaceholder.typicode.com/users"
  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<any> {
    //definen los headers
    return this.http.get(this.Url)
  }
}
