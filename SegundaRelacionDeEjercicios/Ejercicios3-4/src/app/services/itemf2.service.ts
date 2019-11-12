import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';

/*PAsos previos a la lectura de datos de un Json
  0- Se guarda el archivo Json en la carpeta assets

  1- Se importa el cliente HTTP
  2- se inyecta en el constructor
*/

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items: Item[];

  constructor() {
    //Desde Json
    /*this.getItems().subscribe(
      data => {
        this.items = data;
        this.items.forEach(i => i.subtotal = i.price * i.quantity);
      }
    );*/
    this.items = [
      {
        "item": "Teclado Logitech",
        "price": 16.40,
        "quantity": 2
      },
      {
        "item": "Ratón Tacens",
        "price": 10.25,
        "quantity": 3
      },
      {
        "item": "Portátil MSI",
        "price": 999,
        "quantity": 1
      },
      {
        "item": "Tablet Lenovo",
        "price": 139,
        "quantity": 2
      }
    ]
    this.items.forEach(i => i.subtotal = i.price * i.quantity)
  }
/*
  //Método get para obtener todos los elementos el archivo JSON
  getJson(file: string): Observable<Cart[]> {
    return this.http.get<Cart[]>('assets/' + file); //Resto de esta linea en el ejemplo de las películas
  }
  //De forma opcional se puede craar un mátodo para ahorrarnos poner el nombre del fichero json en los constructores
  getItems(): Observable<Cart[]> {
    return this.getJson('fichero');
  }
  */
  getItems(): Item[] {
    return this.items;
  }

  getItemByName(name: string): Item {
    return this.items.find(item => item.item == name);
  }

  addItem(item: Item) {
    this.items.push(item);
  }
}