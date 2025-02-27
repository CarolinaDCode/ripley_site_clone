import ICategorias from "@/interfaces/ICategorias";
import CategoryItemModel from "@/models/Category/CategoryItemModel";

export default class CategoryModel {

    private categoryArray : CategoryItemModel[]

    constructor(data : ICategorias[]) {
        this.categoryArray = []
        data.forEach( (categoria : ICategorias )=> this.categoryArray.push(new CategoryItemModel(categoria)))
    }
    public getCategoryArray(){
        return this.categoryArray;
    }

    public getCategoryArrayLength(){
        return this.categoryArray.length;
    }
}