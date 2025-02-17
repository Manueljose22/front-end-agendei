import { Api } from '../../utils/Api';
import { IPayloadSave, IRequestPayload } from '../sessions/types';
import { IUserProfile } from './types';




const Register = async (payload: IRequestPayload): Promise<IPayloadSave> => {

    const { data } = await Api.post<IPayloadSave>("/admin/register", payload);
    return data;
}


const Profile = async (): Promise<IUserProfile> =>{

    try {
        const {data} = await Api.get<IUserProfile>("/admin/profile");
        return data
    } catch (error: any) {
        alert(error.response.data.message )
        throw new Error(error.response.data.message);
    }

}

export const AdminServices = {
    Register,
    Profile
}