import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;

  constructor(private httpservice:HttpService) { }

  getAllBooks(){
    let header={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpservice.get('get/book',false,header)
  }

  addToBag(productID: any) {
    this.token = localStorage.getItem('Token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpservice.post('add_cart_item/' + productID, {}, true, header)
  }

  updateQuantity(productID: any,req: any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpservice.put('cart_item_quantity/'+productID,req,true,header)
  }

  getcartList(){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpservice.get("get_cart_items",true,header)
  }

  addToWishlist(productId:any){
    this.token = localStorage.getItem('Token')
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpservice.post('add_wish_list/' + productId,null,true,header)
  }

  checkout(data: any) {
    this.token = localStorage.getItem('Token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpservice.post('add/order', data, true, header)
  }

  addfeedback(productId:any, data: any){
    this.token = localStorage.getItem('Token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpservice.post('add/feedback/' + productId, data, true, header)
  }

  getfeedback(productId:any){
    this.token = localStorage.getItem('Token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpservice.get('get/feedback/' + productId,true,header)
  }

  deleteItem(productId:any){
    this.token = localStorage.getItem('Token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpservice.delete('remove_cart_item/' + productId, null, true, header)
  }
  getwishlistItems(){
    this.token = localStorage.getItem('Token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpservice.get('get_wishlist_items',true,header)
  }
  deleteWishlistItem(productId: any){
    this.token = localStorage.getItem('Token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpservice.delete('remove_wishlist_item/' + productId, null, true, header)
  }
}
