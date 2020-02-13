import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _usersService: UsersService) { }
   users: any = [];
  ngOnInit() {
    this.getData();
  }

  public getData(){
    // tslint:disable-next-line: deprecation
    this._usersService
    .getUsers()
    .subscribe((data: any) => {this.users = data; console.log(this.users); }); 
    
  }

}
