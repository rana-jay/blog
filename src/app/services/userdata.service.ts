import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  users()
  {
    return [
      {
        name:'ANil',
        age:15,
        email:'abc@gmail.com'
      },
      {
        name:'BNil',
        age:25,
        email:'c@gmail.com'
      },
      {
        name:'CNil',
        age:33,
        email:'bc@gmail.com'
      }
    ]

  }

  
}
