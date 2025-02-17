import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AppointmentServices } from '../../services/appointments/AppoitmentsService';
import { IDoctorsSave, IDoctorsService } from '../../services/doctors/types';
import { DoctorsServices } from '../../services/doctors/DoctorsServices';
import { IAppointmentSave } from '../../services/appointments/types';


const schema = z.object({
    clientId: z.string().min(1, "Selecione o doctor."),
    doctorId: z.string().min(1, "Selecione o doctor."),
    serviceId: z.string().min(1, "Selecione o serviço."),
    bookingDate: z.string().min(1, "Selecione uma data."),
    bookingHour: z.string().min(1, "Selecione uma hora."),
})

type formData = z.infer<typeof schema>


export const AppointmentEdit = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<formData>({
        resolver: zodResolver(schema)
    });

    const [doctors, setDoctors] = useState<IDoctorsSave[]>([]);
    const [appointment, setAppointment] = useState<IAppointmentSave>();
    const [services, setServices] = useState<IDoctorsService[]>([]);
    const [IdDoctor, setIdDoctor] = useState<string>("");
    const { id } = useParams<string>();
    const navigate = useNavigate();



    const updateAppointment = async (data: formData) => {
        await AppointmentServices.Update(id!, data);
        navigate("/panel/appointments")
    }


    // Get all doctors
    const loadDoctors = useCallback(async () => {
        const data = await DoctorsServices.getAll()
        setDoctors(data)
    }, [])

    const loadServices = useCallback(async () => {
        if (!IdDoctor) {
            return;
        }
        const data = await DoctorsServices.getDoctorService(IdDoctor);
        setServices(data);
    }, [IdDoctor])
  

    // Get all service
    const loadAppoint = useCallback(async () => {
        const data = await AppointmentServices.GetById(id);
        setAppointment(data)
    }, [])


    useEffect(() => {
        loadServices();
    }, [IdDoctor])

    useEffect(() => {
        loadDoctors();
        loadAppoint()
    }, [])

    return (
        <>
            <div className='container-fluid mt-4'>

                <div className="row">
                    <div className="col-12 mt-2">
                        <h2 className='title-color'>Editar Agendamento</h2>
                    </div>
                    <form onSubmit={handleSubmit(updateAppointment)}>
                    <div className="col-12 mt-3">
                            <label htmlFor="doctor" className='form-label'>Paciente</label>
                            <div className="form-control mb-2">
                                <select {...register("clientId")} id="doctor" defaultValue={appointment?.idservie}>
                                    <option >{appointment?.username}</option>
                                    {/* {clients.map(client => (
                                        <option key={client.id} value={client.id}>{client.name}</option>
                                    ))} */}

                                </select>
                            </div>
                            <small className='text-danger p-0 m-0'>{errors && errors.clientId?.message}</small>
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="doctor" className='form-label'>Médico</label>
                            <div className="form-control mb-2">
                                <select  {...register("doctorId")} id="doctor"  onChange={(e)=> setIdDoctor(e.target.value)} >
                                    <option defaultValue={appointment?.idDoctor}>{appointment?.doctor}</option>
                                    {doctors.map(doc => (
                                        <option key={doc.id} value={doc.id}>{doc.name}</option>
                                    ))}

                                </select>
                            </div>
                            <small className='text-danger p-0 m-0'>{errors && errors.doctorId?.message}</small>
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="service" className='form-label'>Serviço</label>
                            <div className="form-control mb-2">
                                <select {...register("serviceId")} id="service" >
                                    <option defaultValue={appointment?.idservie} >{appointment?.service}</option>
                                    {services.map(service => (
                                        <option key={service.idService} value={service.idService}>{service.description}</option>
                                    ))}

                                </select>
                            </div>
                            <small className='text-danger p-0 m-0'>{errors && errors.serviceId?.message}</small>
                        </div>
                        <div className="row">
                            <div className="col-6 mt-3">
                                <label className='form-label' htmlFor="bookingDate">Data</label>
                                <input
                                    className="form-control"
                                    type="date"
                                    id="bookingDate"
                                    {...register("bookingDate")}
                                    defaultValue={appointment?.booking_date.slice(0, 10) || ''}
                                />
                                <small className='text-danger p-0 m-0'>{errors && errors.bookingDate?.message}</small>
                            </div>

                            <div className="col-6 mt-3">
                                <label htmlFor="bookingDate" className='form-label'>Hora</label>
                                <div className="form-control mb-2">
                                    <select {...register("bookingHour")} id="bookingHour" >
                                        <option defaultValue={appointment?.booking_hour}>{appointment?.booking_hour}</option>
                                        <option value="10:00">10:00</option>
                                        <option value="10:30">10:30</option>
                                        <option value="11:00">11:00</option>

                                    </select>
                                </div>
                                <small className='text-danger p-0 m-0'>{errors && errors.bookingHour?.message}</small>
                            </div>
                        </div>
                        <div className="col-12 text-end mt-4">
                            <Link to={"/panel/appointments"} className='btn btn-outline-primary me-3 link-btn-new-appoint'>Cancelar</Link>
                            <button type='submit' className='btn btn-primary'>Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
