import { Injectable } from '@angular/core';
import {Product} from './product.model'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/a45.png',
      title: 'a45',
      price: 130000000,
      description: 'muy caro pero anda que te cagas'
    },
    {
      id: '2',
      image: 'assets/images/cla45.png',
      title: 'cla45',
      price: 140000000,
      description: 'muy caro pero anda que te cagas'
    },
    {
      id: '3',
      image: 'assets/images/descarga.png',
      title: 'm2 compe',
      price: 230000000,
      description: 'muy caro pero anda que te cagas'
    },
    {
      id: '4',
      image: 'assets/images/audiq8.png',
      title: 'audi q8',
      price: 300000000,
      description: 'muy caro pero anda que te cagas'
    },
    {
      id: '5',
      image: 'assets/images/dodge.png',
      title: 'dodge pero es jeep',
      price: 600000000,
      description: 'muy caro pero anda que te cagas'
    }
  ];
  constructor() { }

  getAllProducts(){
    return this.products;
  }

  getProduct(id: string){
    return this.products.find(item => id === item.id);
  }
}
