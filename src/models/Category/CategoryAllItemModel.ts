import ICategoria from "@/interfaces/ICategoria";

class CategoryAllItemModel {
    private descripcion         : string;
    private id_categoria        : number;
    private nombre_categoria    : string;
    private imagen_ref          : string;
    private icon_ref            : string;
    

    constructor(data: ICategoria) {
        this.descripcion        = data.descripcion
        this.id_categoria       = data.id_categoria
        this.nombre_categoria   = data.nombre_categoria
        this.imagen_ref         = data.imagen_ref
        this.icon_ref           = data.icon_ref
    }

    public getDescripcion()     : string {
        return this.descripcion
    }

    public getIdCategoria()     : number {
        return this.id_categoria
    }

    public getNombreCategoria() : string {
        return this.nombre_categoria
    }
    public getImage() : string {
        return this.imagen_ref
    }

    public getIconCategory() : string {
        return this.icon_ref
    }
}

export default CategoryAllItemModel;