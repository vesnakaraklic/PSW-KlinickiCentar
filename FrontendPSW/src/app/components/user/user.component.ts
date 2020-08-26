import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( private userService: UserService) { }

  ngOnInit() {
    console.log('inited');
    this.userService.getUsers().subscribe(data => {
      console.log(data);
    })
  }

}
