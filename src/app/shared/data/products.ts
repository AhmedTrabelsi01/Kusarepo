import { Products } from "src/app/models/products";
import { ProductDetailsComponent } from "src/app/product/product-details/product-details.component"

export class productsDB {
    static Product = [
        {
            id: 1,
            images: 'assets/images/products/02-1.png',
            name: 'Industry marketing by subscription',
            price: 3000.00,
            rating: 4.8,
            feedback: 3,
            category: 'digitalization',
            type: 'webdev'
        },
        {
            id: 2,
            images: 'assets/images/products/01-1.png',
            name: 'Potential analysis - digitization for manufacturing companies',
            price: 3000.00,
            rating: 4.8,
            feedback: 3,
            category: 'digitalization',
            type: 'webdev'
        },
        {
            id: 3,
            type: 'webdev',
            images: 'assets/images/products/01-1.png',
            name: 'Task Management Scheduler',
            price: 3000.00,
            rating: 4.8,
            feedback: 3,
            category: 'digitalization',

        },
        {
            id: 4,
            type: 'webdev',
            images: 'assets/images/products/02-1.png',
            name: 'Industry marketing by subscription',
            price: 3000.00,
            rating: 4.8,
            feedback: 3,
            category: 'digitalization',

        },
        {
            id: 5,
            type: 'appdev',
            images: 'assets/images/products/01-1.png',
            name: 'Potential analysis - digitization for manufacturing companies',
            price: 3000.00,
            rating: 4.8,
            feedback: 3,
            category: 'digitalization',

        },
        {
            id: 6,
            type: 'appdev',
            images: 'assets/images/products/02-1.png',
            name: 'Industry marketing by subscription',
            price: 3000.00,
            rating: 4.8,
            feedback: 3,
            category: 'digitalization',

        },
        {
            id: 7,
            type: 'appdev',
            images: 'assets/images/products/01-1.png',
            name: 'Potential analysis - digitization for manufacturing companies',
            price: 3000.00,
            rating: 4.8,
            feedback: 3,
            category: 'digitalization',

        },
        {
            id: 8,
            type: 'cons',
            images: 'assets/images/products/02-1.png',
            name: 'Industry marketing by subscription',
            price: 3000.00,
            rating: 4.8,
            feedback: 3,
            category: 'digitalization',

        },
        {
            id: 9,
            images: 'assets/images/products/01-1.png',
            name: 'Potential analysis - digitization for manufacturing companies',
            price: 3000.00,
            rating: 4.8,
            feedback: 3,
            category: 'digitalization',
            type: 'cons'
        },
    ]
    onAdd(produit: Products) {
        productsDB.Product.push(produit);
        console.log(productsDB);
    }
}
