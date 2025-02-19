import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../../../models/user.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-select-users',
  standalone: true,
  imports: [AsyncPipe, FormsModule],
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.css'
})
export class AddUsersComponent {
  newUser: User = {user_login : "", user_password : ""}
  newLogin: string = "";
  newPassword: string = "";



  private readonly service = inject(UsersService)
  // items$ = this.service.getAll();
  onSubmitUser() {
    this.newUser = {user_login: this.newLogin, user_password: this.newPassword}
    console.log("component", this.newUser);
    this.service.addUser(this.newUser)
  }
}
