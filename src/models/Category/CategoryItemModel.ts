import ICategorias from "@/interfaces/ICategorias";
import ProductModel from "@/models/Category/ProductModel";


export default class CategoryItemModel extends ProductModel {

    readonly imagen_banner       : string;
    readonly nombre_categoria    : string;

    constructor(data: ICategorias) {
        super(data.productos)
        this.imagen_banner = data.imagen_banner;
        this.nombre_categoria = data.nombre_categoria
    }

    public getImageBanner() : string {
        return this.imagen_banner
    }

    public getNombreCategoria() : string {
        return this.nombre_categoria
    }


}
