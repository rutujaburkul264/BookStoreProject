import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  badgeCount: any;

  constructor(private route:Router,private bookservice: BookService) { }

  ngOnInit(): void {
    this.getcartcountforbadge();
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

  getcartcountforbadge() {
    this.bookservice.getcartList().subscribe((response: any) => {
      console.log(response.result);
      this.badgeCount = response.result.length
    })
  }
}
