
export type IDoctorsRequest = {
    name: string;
    especialty: string;
    photo: string;
}

export interface IDoctorsSave {
    id: string;
    name: string;
    especialty: string;
    photo: string;
    createdAt: Date;
    updatedAt: Date;
}


export interface IDoctorsService {
    idService: string;
    description: string;
    price: number;
}