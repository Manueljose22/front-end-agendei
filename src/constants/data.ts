
type doctor = {
    id_doctor: number;
    name: string;
    specialty: string;
    icon: string;
}


export const doctors: doctor[] = [
    {
        id_doctor: 1,
        name: "Dr. Armando Matheus",
        specialty: "Ginecologia e obstetrícia",
        icon: "M"
    },
    {
        id_doctor: 2,
        name: "Dra. Ana Beatriz Rutini",
        specialty: "Cardiologista",
        icon: "F"
    },
    {
        id_doctor: 3,
        name: "Dr. Antônio Almeida Souza ",
        specialty: "Pediatria",
        icon: "M"
    },
    {
        id_doctor: 4,
        name: "Dra. Roberta Martins",
        specialty: "Clínica Geral",
        icon: "F"
    },
    {
        id_doctor: 5,
        name: "Dra. Nise da Silveira",
        specialty: "Cirurgia Plástica",
        icon: "F"
    },
    {
        id_doctor: 6,
        name: "Dr. Jonatan Silvestre",
        specialty: "Pediatria",
        icon: "M"
    },
    {
        id_doctor: 7,
        name: "Dr. José Eduardo Souza",
        specialty: "Clínica Geral",
        icon: "M"
    },
    {
        id_doctor: 8,
        name: "Dra. Adriana Melo",
        specialty: "Clínica Geral",
        icon: "F"
    },
    {
        id_doctor: 9,
        name: "Dra. Valeria Petri",
        specialty: "Cirurgia Plástica",
        icon: "F"
    },
    {
        id_doctor: 10,
        name: "Dr. Manuel Leonel",
        specialty: "Cirurgia mamario",
        icon: "M"
    }
    ,
    {
        id_doctor: 11,
        name: "Dra. Emanuela Leonilda",
        specialty: "Cirurgia mamario",
        icon: "F"
    }

];

type IAppointments = {

    id_appointment: string;
    service: string;
    username: string;
    doctor: string;
    specialty: string;
    booking_date: string;
    booking_hour: string;
    price: number;

}
export const appointments: IAppointments[] = [
    {
        id_appointment: "1",
        service: "Consulta",
        username: "Mateus Domingos",
        doctor: "Dra. Nise da Silveira",
        specialty: "Cirurgia Plástica",
        booking_date: "2024-10-25",
        booking_hour: "08:30",
        price: 20000
    },
    {
        id_appointment: "2",
        service: "Consulta",
        username: "Mauro Silva",
        doctor: "Dr. Antônio Almeida Souza",
        specialty: "Pediatria",
        booking_date: "2024-10-28",
        booking_hour: "15:40",
        price: 20000
    },
    {
        id_appointment: "4",
        service: "Consulta",
        username: "Jorgina Miranda",
        doctor: "Dra. Roberta Martins",
        specialty: "Clínica Geral",
        booking_date: "2024-11-05",
        booking_hour: "14:15",
        price: 30000
    },
    {
        id_appointment: "5",
        service: "Consulta",
        username: "Edna Domingos",
        doctor: "Dra. Nise da Silveira",
        specialty: "Cirurgia Plástica",
        booking_date: "2024-11-18",
        booking_hour: "11:00",
        price: 100000
    },
    
]

export const doctors_services = [
    {
        id_service: 1,
        description: "Consulta Médica",
        price: 499.99
    },
    {
        id_service: 2,
        description: "Drenagem Linfática",
        price: 650
    },
    {
        id_service: 3,
        description: "Lipoaspiração",
        price: 5000
    },
    {
        id_service: 4,
        description: "Mamoplastia",
        price: 1700
    }
];