import IProducts from "@/interfaces/IProducts";
import ProductItemModel from "@/models/Category/ProductItemModel";

export default class ProductModel{

    private productArray: IProducts[]

    constructor(data: IProducts[]) {
        this.productArray= []
        data.forEach(product => this.productArray.push(new ProductItemModel(product)))
    }
     public getproductArray(){
        return this.productArray;
     }
}