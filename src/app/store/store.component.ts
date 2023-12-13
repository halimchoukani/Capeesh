import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent {
  constructor(public users: UserService) {}
}
