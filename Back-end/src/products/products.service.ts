import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private productRepo:Repository<Product>){}
    findAll():Promise<Product[]>{
        return this.productRepo.find();
    }
    create(newProduct){
        this.productRepo.insert(newProduct);
    }
    




    // private products:Product[]=[];
    // private findProduct(prodId:string):[Product,number]{
    //     const productIndex=this.products.findIndex((prod)=>{prod.id==prodId})
    //     const product=this.products[productIndex];
    //     if(!product){
    //         throw new NotFoundException('Could not find product.')
    //     }
    //     return [product,productIndex]      

    // }

    // insertProduct(title:string,desc:string,price:number):string{
    //     const proId=new Date().toString();
    //     const newPro=new Product(proId,title,desc,price)
    //     this.products.push(newPro);
    //     return proId;
    // }
    // getProduct(){
    //     return [...this.products];
    // }
    // getSingleProduct(prodId:string){
    //     const product=this.findProduct(prodId)[0];        
    //     return {...product}
    
    
    //   }
    //   updateProduct(
    //       prodId:string,
    //       title:string,
    //       desc:string,
    //       price:number){
    //         const [product,index]=this.findProduct(prodId);
    //         const updatedProduct={...product};
    //         if(title){
    //             updatedProduct.title=title;
    //         };
    //         if(desc){
    //             updatedProduct.description=desc;
    //         };
    //         if(price){
    //             updatedProduct.price=price;
    //         };
    //         this.products[index]=updatedProduct;          

    //       }
    // deleteProduct(prodId:string){
    //     const index=this.findProduct(prodId)[1];
    //     this.products.splice(index,1);

    // }
    

}
