import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pizza } from '../pizza-list/Pizza';

@Component({
  selector: 'app-input-integer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-integer.html',
  styleUrls: ['./input-integer.scss'],
})

export class InputInteger {

  @Input()
  quantity!: number; 

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

upQuantity(): void {
  if(this.quantity < this.max){
    this.quantity++;
    this.quantityChange.emit(this.quantity);
}else 
  this.maxReached.emit("No hay más stock disponible");
}

downQuantity(): void {
  if(this.quantity > 0)
    this.quantity--;
    this.quantityChange.emit(this.quantity);
}

changeQuantity(event: any): void {
  console.log(event);
  this.quantityChange.emit(this.quantity);

}
}
