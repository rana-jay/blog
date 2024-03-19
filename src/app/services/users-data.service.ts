import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { 

  }

  users(){
    return this.http.get(this.URL);
  }

  saveUsers(data:any){
    return this.http.post(this.URL,data);
  }
}
