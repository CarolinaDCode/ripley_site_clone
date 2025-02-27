import axios from 'axios'
import {API_PREFIX_MAIN} from '@/constants'

export class ProductServices {
    public async getProduct(id_prod : number){
        const { data } = await axios.get(`${API_PREFIX_MAIN}/productos/producto/${id_prod}`)
        return data
    }

    public async getSearchProduct(nom_product : string){
        const { data } = await axios.get(`${API_PREFIX_MAIN}/search/productos/${nom_product}`)
        return data
    }
}

export const productServices = new ProductServices()