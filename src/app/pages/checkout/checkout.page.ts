import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  order(){
    document.getElementById("name").innerHTML="Order SUCCESSFUL";
    (<HTMLInputElement> document.getElementById("submit")).disabled = true;
    //
  }

  home(){
    this.router.navigate(['order']);
  }

}
