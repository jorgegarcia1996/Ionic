import { Component } from '@angular/core';
import { Item } from '../interfaces/item';
import { ItemService } from '../services/item.service';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private items: Item[];

  constructor(private service: ItemService) {}

  ngOnInit() {
    this.items = this.service.getItems();
    /* Forma para subscripcion de datos con observable
    this.service.getItems().subscribe(
      data => {
        this.items = data;
      }
    );
    */
  }

  getTotal(): number {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total = total + this.items[i].subtotal; 
    }
    return total;
  }
}
