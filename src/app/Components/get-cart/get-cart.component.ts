import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/BookService/book.service';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-get-cart',
  templateUrl: './get-cart.component.html',
  styleUrls: ['./get-cart.component.scss']
})
export class GetCartComponent implements OnInit {
  editDetailsOfUserForm!: FormGroup;
  book_qty = 1;
  cartList: any = [];
  step = 0;
  orderList: any = [];
  listCountOfCart: any;
  submitted: boolean=false;

  constructor(private bookservice:BookService,private route:Router,private formbuilder:FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {
    this.editDetailsOfUserForm = this.formbuilder.group({
      fullName: ['',Validators.required],
      mobileNo: ['', [Validators. required, Validators. pattern("^((\\+91-?) |0)?[0-9]{10}$")]],
      address: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      service: "advance"
    })
    this.getCartList();
  }

  getCartList(){
    this.bookservice.getcartList().subscribe((response:any)=>{
      console.log(response)
      this.cartList = response.result
      this.cartList.reverse()
      this.listCountOfCart = response.result.length
    })
  }

  decrement(book:any){
    if(this.book_qty != 1){
      this.book_qty = this.book_qty - 1;
      }
    this.updateQty(book);
  }

  increment(book:any){
    this.book_qty = this.book_qty + 1;
    this.updateQty(book);
  }

  updateQty(book:any){
    let req={
      "quantityToBuy" : this.book_qty
    }
    this.bookservice.updateQuantity(book.product_id._id, req).subscribe((response:any)=>{
      console.log(response)
    })
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  updateAddress(){
    this.submitted = true;
    if (this.editDetailsOfUserForm.valid) {
      let data={
        addressType : "Home",
        fullAddress : this.editDetailsOfUserForm.value.address,
        city : this.editDetailsOfUserForm.value.city,
        state : this.editDetailsOfUserForm.value.state,
        service : this.editDetailsOfUserForm.value.service
      }
      this.userservice.updateAddress(data).subscribe((response: any)=>{
        console.log(response)
      })
    }
  }

  placeOrder(){
    this.cartList.forEach((element:any) => {
      console.log(element)
      this.orderList.push(
        {
        "product_id" : element.product_id._id,
        "product_name" : element.product_id.bookName,
        "product_quantity" : element.product_id.quantityToBuy,
        "product_price" : element.product_id.price
        })
    });
    // console.log("orderList is this", this.orderList);

    let req = {
      "orders": this.orderList
    }
    this.bookservice.checkout(req).subscribe((response: any) => {
      console.log(response);

    })
    this.route.navigateByUrl("/dashboard/shopping")
  }

  deleteCartItem(book: any){
    this.bookservice.deleteItem(book._id).subscribe((response: any) => {
      console.log(response);
    })
    this.getCartList();
  }
  
}
