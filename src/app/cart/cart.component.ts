import { Component } from '@angular/core';
import { ICar } from '../car.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems!: ICar[];
  total: number;
  constructor(private cartService : CartService){
    this.cartItems = this.cartService.cartItems;
    this.total = this.cartService.getTotal();
  
  }

  onIncreaseQtty(car: ICar){
    this.cartService.increaseQtty(car);
    this.total = this.cartService.getTotal();
  }

  onDecreaseQtty(car: ICar){
    this.cartService.decreaseQtty(car);
    this.total = this.cartService.getTotal();
    this.cartItems = this.cartService.cartItems;
  }

  onDelete(index: number){
    this.cartService.deleteItem(index)
    this.total = this.cartService.getTotal();
  }
}
