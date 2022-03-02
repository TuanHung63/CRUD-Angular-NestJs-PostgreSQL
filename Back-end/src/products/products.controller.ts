/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { Product } from './products.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService:ProductsService){}

  @Get()
  async getAll():Promise<Product[]>{
    return await this.productsService.findAll();

  }
  @Post('add')
  @HttpCode(201)
  createNewProd(@Body() newProd:any){
    this.productsService.create(newProd);
  }





  // @Post()
  // addProduct(
  //   @Body('title') prodTitle:string,
  //   @Body('description') prodDesc:string,
  //   @Body('price') prodPrice:number
  // )  {
    
  //   const generatedId=this.productsService.insertProduct(prodTitle,prodDesc,prodPrice);
  //   return {id:generatedId};
      
  // }
  // @Get()
  // getAllProduct(){
  //   return this.productsService.getProduct();

  // }
  // @Get(':id')
  // getSingleProduct(@Param('id') prodId:string){
  //   return this.productsService.getSingleProduct(prodId);
  // }
  // //update
  // @Patch()
  // updateProduct(
  //   @Param('id') prodId:string,
  //   @Body('title') prodTitle:string,
  //   @Body('description') prodDesc:string,
  //   @Body('price') prodPrice:number){
  //     this.productsService.updateProduct(prodId,prodTitle,prodDesc,prodPrice);
  //     return null;

  // }
  // @Delete(':id')
  // deleteProduct(@Param('id') prodId:string){
  //   this.productsService.deleteProduct(prodId);
  //   return null;

  // }
}
