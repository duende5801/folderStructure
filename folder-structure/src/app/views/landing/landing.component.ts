import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  btnClass = "";
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }
  onKlick() {
    this.btnClass = "btn-success";
  }

}
