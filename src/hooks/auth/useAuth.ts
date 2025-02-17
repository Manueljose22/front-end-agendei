import { useState } from "react"
import { IPayloadSave, IRequestPayload } from "../../services/sessions/types";
import { SessionServices } from "../../services/sessions/SessionsServices";
import { useNavigate } from "react-router-dom";
import { AdminServices } from "../../services/admin/AdminServices";
import { IUserProfile } from "../../services/admin/types";




export const useAuth = () =>{

    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<IUserProfile>();
    const navigate = useNavigate();


    const Login = async (paylaod: Pick<IRequestPayload, 'email' | 'password'>) =>{
        const data = await SessionServices.login(paylaod);
        useAuth(data);
    }

    const Register = async (payload: IRequestPayload) =>{
        const data = await AdminServices.Register(payload);
        useAuth(data);
    }

    const logout = () =>{
        setAuthenticated(false);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    }


    const useAuth = (data: IPayloadSave) =>{
        if(data.token === ""){
           return navigate("/");
        }
        // setUser(data.user);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", data.user.name);
        setAuthenticated(true);
        navigate("/panel/appointments");

        
    }


    
    return{
        Login,
        Register,
        logout,
        user,
        authenticated
    }

}