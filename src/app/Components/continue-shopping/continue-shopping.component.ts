import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continue-shopping',
  templateUrl: './continue-shopping.component.html',
  styleUrls: ['./continue-shopping.component.scss']
})
export class ContinueShoppingComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    
  }

  continueShopping(){
    this.route.navigateByUrl("/dashboard/books")
  }
}
