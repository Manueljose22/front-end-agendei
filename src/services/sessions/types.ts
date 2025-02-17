

export interface IRequestPayload {
    name: string;
    email: string;
    password: string
}


export interface IUserSave {
    id: string;
    name: string;
    email: string;
}

export interface IPayloadSave {
    user: IUserSave;
    token: string;
}

