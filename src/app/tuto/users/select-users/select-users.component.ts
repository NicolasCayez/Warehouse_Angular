import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-select-users',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './select-users.component.html',
  styleUrl: './select-users.component.css'
})
export class SelectUsersComponent {
  // private readonly service = inject(UsersService)
  // items$ = this.service.getAll();
  items$ = inject(UsersService).getAll();

}
