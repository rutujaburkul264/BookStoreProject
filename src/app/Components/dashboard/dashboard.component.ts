import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  Cart(){
    this.route.navigateByUrl("/dashboard/getCart")
  }
  bookstore(){
    this.route.navigateByUrl("/dashboard/books")
  }

  Logout(){
    localStorage.removeItem('Token');
    this.route.navigateByUrl("login")
  }

  wishlist(){
    this.route.navigateByUrl("dashboard/getWishList")
  }

}
