import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css'],
})
export class PhoneComponent implements OnInit {
  id: number = 0;
  phone: any;
  relatedPhones: any[] = [];

  constructor(
    public users: UserService,
    private router: ActivatedRoute,
    private routeLink: Router
  ) {}

  ngOnInit() {
    this.id = +this.router.snapshot.params['id'];
    this.phone = this.users.findPhone(this.id);
    console.log(this.phone);
  }

  redirect(id: number) {
    this.id = id;
    this.routeLink.navigate(['/phone', id]);
  }

  addtopanier() {
    this.users.addPhoneToPanier(this.phone);
  }
}
