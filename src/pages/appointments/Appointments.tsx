
import { Table } from "../../components/table/Table";
import { useCallback, useEffect, useState } from "react";
import { IAppointmentSave } from "../../services/appointments/types";
import { AppointmentServices } from "../../services/appointments/AppoitmentsService";
import { IDoctorsSave } from "../../services/doctors/types";
import { DoctorsServices } from "../../services/doctors/DoctorsServices";
import { useForm } from "react-hook-form";
import { ToolBar } from "./components/toolbar/ToolBar";







export const Appointments = () => {

    const [Appointments, setAppointments] = useState<IAppointmentSave[]>([]);
    const [doctors, setDoctors] = useState<IDoctorsSave[]>([]);
    const { register, handleSubmit } = useForm<IAppointmentSave>();



    const handleDelete = async (id: string) => {
        setAppointments(Appointments.filter((item) => item.id !== id));
        await AppointmentServices.Cancel(id);
    }

    // Filter
    const handleFilter = async (search: IAppointmentSave) => {
        if (search.doctor === "0") {
            loadAppointments();
        } else if (search.doctor) {
            const data = await AppointmentServices.GetAll(search.doctor);
            setAppointments(data);
        }

    }

    // Get all appointments
    const loadAppointments = useCallback(async () => {
        const data = await AppointmentServices.GetAll();
        setAppointments(data)
    }, [])


    // Get all doctors
    const loadDoctors = useCallback(async () => {
        const data = await DoctorsServices.getAll()
        setDoctors(data)
    }, [])


    useEffect(() => {
        loadAppointments();
        loadDoctors();
    }, [])



    return (
        <>
            <ToolBar
                title="Agendamentos"
                txtBtn="Novo agendamento"
                url="/panel/appointments/add"
                data={doctors}
                handleFilter={handleFilter}
                register={register("doctor")}
                registerDate={register("booking_date")}
                handleSubmit={handleSubmit}
            />

            <Table data={Appointments} handleDelete={handleDelete} />

        </>
    )
}
