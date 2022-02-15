import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-get-wish-list',
  templateUrl: './get-wish-list.component.html',
  styleUrls: ['./get-wish-list.component.scss']
})
export class GetWishListComponent implements OnInit {
  
  wishList: any;
  wishlistCount: any;

  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
    this.getWishlist()
  }

  getWishlist(){
    this.bookservice.getwishlistItems().subscribe((response:any)=>{
      console.log(response)
      this.wishList = response.result
      this.wishList.reverse()
      this.wishlistCount = response.result.length
    })
  }

  deleteWishlist(book:any){
    console.log(book.product_id._id)
    this.bookservice.deleteWishlistItem(book.product_id._id).subscribe((response:any)=>{
      console.log(response)
    })
  }

}
