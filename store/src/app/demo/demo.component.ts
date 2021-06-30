import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'foca';
  
  power = 10;

  items = ['Daniel','Andres','Sancho','Pepito','Perez'];

  ngOnInit(){
    //Code 
  }

  addItem (){

    this.items.push(this.title);

  }

  deleteItem (){

    this.items.pop();

  }

  deleteItem2(index: number){

    this.items.splice(index, 1);

  }

  constructor() { }

}
