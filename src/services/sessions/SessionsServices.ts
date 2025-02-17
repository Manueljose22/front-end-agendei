import { Api } from "../../utils/Api";
import { IPayloadSave, IRequestPayload } from "./types";




const login = async (payload: Pick<IRequestPayload, 'email' | 'password'>): Promise<IPayloadSave> => {

    const { data } = await Api.post<IPayloadSave>('/session/login', payload);
    return data;

}


export const SessionServices = {
    login,
}