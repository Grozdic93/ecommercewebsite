import { Injectable } from '@angular/core';
import { ICar } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: ICar[]= [];
  formData!: string;
  constructor() { }


  addToCart(car: ICar){
    if(this.cartItems.includes(car)){
      car.qtty++
    }else{
      this.cartItems.push(car);
    }
  
    
  }
  increaseQtty(car:ICar){
    car.qtty++;
  }
  decreaseQtty(car:ICar){
    // car.qtty > 1 && car.qtty --;
    if(car.qtty > 1){
      car.qtty --;
    }else{
       this.cartItems = this.cartItems.filter(cartItem => car != cartItem)
      
    }
  }
  deleteItem(index: number){
    this.cartItems[index].qtty = 1;
    this.cartItems.splice(index,1)
  }
  getData(){
    return this.cartItems
  }
  addData(data: string){
    this.formData = data
  }

  getTotal(): number{
    let total = 0;
    this.cartItems.forEach( car => total += car.price * car.qtty)
    return total;
  }
}
