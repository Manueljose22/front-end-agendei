import { Api } from "../../utils/Api";
import { servicesRequest, servicesSave } from "./types";




const getAll = async (): Promise<servicesSave[]> => {

    try {
        const { data } = await Api.get<servicesSave[]>("/services");
        return data;
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}

const create = async (data: servicesRequest): Promise<void> => {
    try {
        await Api.post<servicesRequest>("/services/register", data);
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}

const deleteById = async (id: string): Promise<void> => {
    try {
        await Api.delete(`/services/${id}`);
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}

const getById = async (id: string): Promise<servicesSave> => {
    try {
        const { data } = await Api.get<servicesSave>(`/services/${id}`);
        return data;
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
}

const update = async (id: string, dataSave: servicesRequest): Promise<void> => {

    try {
        const { data } = await Api.put<servicesRequest>(`/services/${id}`, dataSave);

    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}





export const serviceServices = {
    getAll,
    create,
    deleteById,
    getById,
    update
}