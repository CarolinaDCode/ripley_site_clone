import IProducts from "@/interfaces/IProducts";

export default interface ICategorias {
    imagen_banner       : string;
    nombre_categoria    : string;
    productos           : IProducts[]

}