import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {
  book: any;
  bookstore: any;
  countBooks: any;
  totalLength: any;
  page: number = 1;

  constructor(private bookservice:BookService,private route:Router) { }

  ngOnInit(): void {
    this.getbooks();
  }

  getbooks(){
    this.bookservice.getAllBooks().subscribe((response:any)=>{
      console.log(response)
      this.bookstore = response.result
      this.totalLength = response.result.length
      this.countBooks = response.result.length
      console.log(this.countBooks)
    })
  }
  
  quickview(book:any){
    localStorage.setItem('bookId', book._id);
    console.log("id", book._id);
    this.route.navigateByUrl('/dashboard/quickview/' + book._id)
  }

  lowTohigh(){
    this.bookstore = this.bookstore.sort((low: any, high: any) => low.price - high.price);
  }

  highTolow(){
    this.bookstore = this.bookstore.sort((low: any, high: any) => high.price - low.price);
  }

  newArrivals(){
    
  }
}



