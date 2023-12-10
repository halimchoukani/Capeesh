import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  currentuser: any;
  constructor(public user: UserService, private router: ActivatedRoute) {
    this.router.params.subscribe((params) => {
      this.currentuser = this.user.findUser(params['id']);
    });
  }
}
