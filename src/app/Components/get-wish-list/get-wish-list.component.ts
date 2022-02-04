import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-get-wish-list',
  templateUrl: './get-wish-list.component.html',
  styleUrls: ['./get-wish-list.component.scss']
})
export class GetWishListComponent implements OnInit {
  
  wishList: any;
  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
    this.getWihlist()
  }

  getWihlist(){
    this.bookservice.getwishlistItems().subscribe((response:any)=>{
      console.log(response)
    })
  }

}
