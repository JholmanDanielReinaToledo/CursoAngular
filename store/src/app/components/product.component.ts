import {Component, Input, Output, EventEmitter, SimpleChange} from '@angular/core';
import {Product} from '../product.model';


@Component({
    selector:'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent{
    @Input()
    product!: Product;

    @Output() productAddCart: EventEmitter<any> = new EventEmitter();

    constructor(){
        console.log('1 constructor');
    }

    //ngOnChanges(changes: SimpleChange) {
    //    console.log('2 ngOnChanges');
    //    console.log(changes);
    //}

    ngOnInit(){
        console.log('3 ngOnInit');
    }

    ngDoCheck(){
        console.log('4. docheck')
    }

    ngOnDestroy(){
        console.log('5. destroy')
    }

    addCart(){
        console.log('añadir al carrito');
        this.productAddCart.emit(this.product.id);
    }
}