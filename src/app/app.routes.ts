import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SelectUsersComponent } from './tuto/users/select-users/select-users.component'; 
import { AddUsersComponent } from './tuto/users/add-users/add-users.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'select', component: SelectUsersComponent},
  { path: 'insert', component: AddUsersComponent},
];