import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pojectName = 'My Poject';
  isLogin = false;
  loginUser;
  constructor() { }

  ngOnInit() {
  }

  signIn(username, password){
    this.loginUser = {name: username};
    this.isLogin = true;
    return false;
  }

  logOut(){
    this.loginUser = {};
    this.isLogin = false;
  }

}
