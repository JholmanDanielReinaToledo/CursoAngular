import { Component } from '@angular/core';

import { Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foca';
  
  items = ['Daniel','Andres','Sancho','Pepito','Perez'];

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

  addItem (){

    this.items.push(this.title);

  }

  deleteItem (){

    this.items.pop();

  }

  deleteItem2(index: number){

    this.items.splice(index, 1);

  }

  clickProduct(id: number){
    console.log('product',id);
  }

}
