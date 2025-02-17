import { createContext, ReactNode } from "react";
import { IRequestPayload } from "../../services/sessions/types";
import { useAuth } from "../../hooks/auth/useAuth";
import { IUserProfile } from "../../services/admin/types";


interface IAuthContext {
    authenticated: boolean;
    Login: (payload: Pick<IRequestPayload, 'email' | 'password'>) => void;
    Register: (payload: IRequestPayload) => void;
    logout: () => void;
    user?: IUserProfile;
}

type props = {
    children: ReactNode;
}



export const authContext = createContext<IAuthContext>({} as IAuthContext);


export const AuthContextProvider = ({ children }: props) => {

    const { authenticated, Login, logout, Register, user } = useAuth();

    return (
        <authContext.Provider value={{ authenticated, Login, Register, logout, user }}>
            {children}
        </authContext.Provider>
    )
}