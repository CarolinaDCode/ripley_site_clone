import ICategoria from "@/interfaces/ICategoria";
import CategoryAllItemModel from "@/models/Category/CategoryAllItemModel";

export default class CategoryAllModel {
    private categoryAllArray : CategoryAllItemModel[]

    constructor(data: ICategoria[]) {
        this.categoryAllArray = []
        data.forEach(categoria => this.categoryAllArray.push(new CategoryAllItemModel(categoria)))
    }

    public getCategoryAllArray() {
        return this.categoryAllArray;
    }

}