import IProducts from "@/interfaces/IProducts";

class ProductItemModel {
    readonly cod_product         :   string;
    readonly descripcion         :   string;
    readonly descuento           :   number;
    readonly foto                :   string;
    readonly id_categoria        :   number;
    readonly id_product          :   number;
    readonly nombre_marca        :   string;
    readonly precio_final        :   number;
    readonly precio_unitario     :   number;
    readonly id_marca            :   number;
    readonly precio_internet     :   number;

    constructor(data: IProducts) {
        this.cod_product         =   data.cod_product
        this.descripcion         =   data.descripcion
        this.descuento           =   data.descuento
        this.foto                =   data.foto
        this.id_categoria        =   data.id_categoria
        this.id_product          =   data.id_product
        this.nombre_marca        =   data.nombre_marca
        this.precio_final        =   data.precio_final
        this.precio_unitario     =   data.precio_unitario
        this.id_marca            =   data.id_marca
        this.precio_internet     = data.precio_internet
    }

    public getIdProduct() : number {
        return this.id_product;
    }

    public getIdCategoria() : number {
        return this.id_categoria;
    }

    public getCodProduct() : string {
        return this.cod_product;
    }

    public getFoto() : string {
        return this.foto;
    }

    public getPrecioUnitario() : number {
        return this.precio_unitario;
    }

    public getDescuento() : number {
        return this.descuento;
    }

    public getPrecioFinal() : number {
        return this.precio_final;
    }

    public getDescripcion() : string {
        return this.descripcion;
    }

    public getNombreMarca() : string {
        return this.nombre_marca;
    }
    public getIdMarca() : number {
        return this.id_marca;
    }
    public getPrecioInternet() : number {
        return this.precio_internet;
    }
}

export default ProductItemModel;