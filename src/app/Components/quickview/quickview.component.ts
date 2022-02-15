import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  id: any;
  bookData: any;
  book_qty = 1;
  feedback: any;
  feedbackArray: any;
  addtobag: boolean = true;
  quantity: boolean = false;
  toggle = true;
  status = 'Enable';
  value: any;

  constructor(private bookservice: BookService, private route: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("bookId")
    this.getBookDetails();
  }

  getBookDetails() {
    this.bookservice.getAllBooks().subscribe((response: any) => {
        response.result.forEach((element: any) => {
          // console.log(element)
          if (element._id == this.id) {
            this.bookData = element;
        }
      });
    })
  }

  addtoCart(){
    this.addtobag = false;
    this.quantity = true;

    this.bookservice.addToBag(this.id).subscribe((response: any) =>{
      console.log(response)
    })
    this.route.navigateByUrl('/dashboard/getCart')
  }

  decrement(){
    if(this.book_qty > 0){
    this.book_qty = this.book_qty - 1;
    }
    this.updateQty();
  }

  increment(){
    this.book_qty = this.book_qty + 1;
    this.updateQty();
  }

  updateQty(){
    let req={
      "quantityToBuy" : this.book_qty
    }
    this.bookservice.updateQuantity(req,this.bookData._id).subscribe((response:any)=>{
      console.log(response)
    })
  }
  
  addtoWishlist(){
    console.log("added to wishlist")
    this.bookservice.addToWishlist(this.id).subscribe((response:any) =>{
      console.log(response)
    })
    this.route.navigateByUrl('/dashboard/getWishList')
  }

  getShortName(fullName: any) {
    return fullName.split(' ').map((n: any[]) => n[0]).join('');
  }

  addFeedback(){
    let req = {
      comment : this.feedback,
      rating : this.value
    }
    this.bookservice.addfeedback(this.id, req).subscribe((response:any) =>{
      console.log(response)
    })
  }
}

