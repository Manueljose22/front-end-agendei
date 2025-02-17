import { Api } from "../../utils/Api";
import { IDoctorsRequest, IDoctorsSave, IDoctorsService } from "./types"



const create = async (data: IDoctorsRequest): Promise<void> => {

    try {
        await Api.post<IDoctorsRequest>(`/doctors/register`, data)
    } catch (error: any) {
        alert(error.response.data.message);
        throw new Error(error.response.data.message);
    }
}


const getAll = async (search?: string): Promise<IDoctorsSave[]> => {

    try {

        const { data } = await Api.get<IDoctorsSave[]>("/doctors", {
            params:{
                search
            }
        });

        return data;

    } catch (error: any) {
        alert(error.response.data.message);
        throw new Error(error.response.data.message);
    }
}

const getById = async (id: string): Promise<IDoctorsSave> => {

    try {

        const { data } = await Api.get<IDoctorsSave>(`doctors/${id}`);

        return data;

    } catch (error: any) {
        alert(error.response.data.message);
        throw new Error(error.response.data.message);
    }
}


const getDoctorService = async (idDoctor?: string): Promise<IDoctorsService[]> => {

    try {
        const { data } = await Api.get<IDoctorsService[]>(`/doctors/${idDoctor}/services`)

        return data;

    } catch (error: any) {
        alert(error.response.data.message);
        throw new Error(error.response.data.message);
    }
}

const update = async (id: string, data: IDoctorsRequest): Promise<void> => {

    try {
        await Api.put<IDoctorsRequest>(`/doctors/${id}`, data)
    } catch (error: any) {
        alert(error.response.data.message);
        throw new Error(error.response.data.message);
    }
}

const deleteDoctor = async (id: string): Promise<void> => {

    try {
        await Api.delete(`/doctors/${id}`)
    } catch (error: any) {
        alert(error.response.data.message);
        throw new Error(error.response.data.message);
    }
}



export const DoctorsServices = {
    getAll,
    getById,
    getDoctorService,
    deleteDoctor,
    update,
    create

}
