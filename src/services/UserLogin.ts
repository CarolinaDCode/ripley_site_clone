import axios from "axios";
import {API_PREFIX_MAIN} from "@/constants";

export class UserLogin{

    public async LoginUser (datos: any){

        const {data} = await axios.post(`${API_PREFIX_MAIN}/login`,datos,
            {
                headers:{
                    'Content-type': 'application/json',
                }
            })
        return data;
    }
}

export const userLogin = new UserLogin()