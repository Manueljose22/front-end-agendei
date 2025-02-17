import { Api } from "../../utils/Api";
import { IClientsRequest, IClientsSave } from "./types";




const register = async (payload: IClientsRequest): Promise<IClientsSave> => {

    const { data } = await Api.post<IClientsSave>('/clients/register', payload);
    return data;

}


const getAll = async (): Promise<IClientsSave[]> => {

    try {

        const { data } = await Api.get<IClientsSave[]>("/clients/");
        return data;

    } catch (error: any) {
        alert(error.response.data.message);
        throw new Error(error.response.data.message);
    }
}






export const ClientsServices = {
    register,
    getAll
}