import { Api } from '../../utils/Api';
import { IAppointmentSave, ICreateAppointments } from './types';






const Create = async (data: ICreateAppointments): Promise<void | Error> => {

    try {
        await Api.post<ICreateAppointments>("/admin/appointments/register", data);
    } catch (error: any) {
        alert(error.response.data.message);
        throw new Error(error.response.data.message);
    }
}


const GetAll = async (search?: string): Promise<IAppointmentSave[]> => {

    try {
        const { data } = await Api.get<IAppointmentSave[]>("/appointments/", {
            params:{
                search
            }
        });
        return data

    } catch (error: any) {
        alert(error.response.data.message);
        throw new Error(error.response.data.message);
    }
}

const GetById = async (id?: string): Promise<IAppointmentSave> => {

    try {
        const { data } = await Api.get<IAppointmentSave>(`admin/appointments/${id}`);
        return data

    } catch (error: any) {
        alert(error.response.data.message);
        throw new Error(error.response.data.message);
    }
}

const Cancel = async (idAppointment: string): Promise<void> =>{
    try {
        await Api.delete(`/appointments/${idAppointment}`);

    } catch (error: any) {
        alert(error.response.data.message);
        throw new Error(error.response.data.message);
    }
}

const Update = async (idAppointment: string, data: ICreateAppointments): Promise<void> =>{
    try {
        await Api.put(`/appointments/${idAppointment}`, data);
    } catch (error: any) {
        alert(error.response.data.message);
        throw new Error(error.response.data.message);
    }
}



export const AppointmentServices ={
    Create,
    GetAll,
    GetById,
    Cancel,
    Update,
}