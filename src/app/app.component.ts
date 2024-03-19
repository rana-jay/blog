import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from "./user-list/user-list.component";
import { UserList2Component } from "./user-list2/user-list2.component";
import { LoginComponent } from "./user-auth/login/login.component";
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { UsersDataService } from './services/users-data.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserListComponent, UserList2Component, LoginComponent,FooterComponent,CommonModule,FormsModule]
})
export class AppComponent {
  title = 'blog';
  // data = 'Random dattaaksgug  gwg ehig88r ';
  // getFunction(){
  //   return "Hi jay ";
  // };

  // users:any ;
  // constructor( private userdata:UserdataService){
  //   this.users = this.userdata.users();
  //   console.log(this.users)
  // }
users:any;
  constructor( private userData:UsersDataService ){
    this.userData.users().subscribe((data)=>this.users=data);
  }

  getUserFormData(Data:any){
    console.log("submitted");
    console.log(Data);
    this.userData.saveUsers(Data).subscribe(
      (result)=>{
        console.log(result);
      }
    );
  }


}
