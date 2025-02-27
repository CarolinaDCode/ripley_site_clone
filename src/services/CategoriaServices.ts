import axios from 'axios'
import {API_PREFIX_MAIN} from '@/constants'
import IProducts from "@/interfaces/IProducts";
import ICategoria from "@/interfaces/ICategoria";

export class CategoriaServices {

    public async getProductsAndCategory(id_cat : number)  {
        const { data } = await axios.get(`${API_PREFIX_MAIN}/productos/categoria/${id_cat}`)
        return data
    }

    public async getAllCategories() : Promise<ICategoria[]> {
        const { data } = await axios.get(`${API_PREFIX_MAIN}/productos/categoria`)
        return data
    }

    public async getSearchCategory(nom_category: string) : Promise<ICategoria[]> {
        const { data } = await axios.get(`${API_PREFIX_MAIN}/search/categoria/${nom_category}`)
        return data
    }
}

export const categoriaServices = new CategoriaServices()