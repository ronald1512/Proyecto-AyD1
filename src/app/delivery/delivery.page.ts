import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { from } from 'rxjs';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {
  user: User= {uid:'', email:'', displayName:''};
  constructor(private userService: UserService) { }

  ngOnInit() {
    /**Con este código obtengo la información del usuario actual */
    let response = this.userService.getCurrentUser().then(function (firebaseUser) {
      console.log("Encontrado!");
      return firebaseUser;
    });
    const observable= from(response);
    observable.subscribe(res => (this.user={uid: res.uid, email: res.email, displayName:res.displayName}));
  }

}
