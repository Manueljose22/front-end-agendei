import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IClientsSave } from '../../services/clients/types';
import { DoctorsServices } from '../../services/doctors/DoctorsServices';
import { IDoctorsSave, IDoctorsService } from '../../services/doctors/types';
import { ClientsServices } from '../../services/clients/ClientsServices';
import { AppointmentServices } from '../../services/appointments/AppoitmentsService';


const schema = z.object({
    clientId: z.string().min(1, "Selecione o paciente."),
    doctorId: z.string().min(1, "Selecione o doctor."),
    serviceId: z.string().min(1, "Selecione o serviço."),
    bookingDate: z.string().min(1, "Selecione uma data."),
    bookingHour: z.string().min(1, "Selecione uma hora."),
})

type formData = z.infer<typeof schema>



export const AppointmentAdd = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<formData>({
        resolver: zodResolver(schema)
    });

    const [doctors, setDoctors] = useState<IDoctorsSave[]>([]);
    const [IdDoctor, setIdDoctor] = useState<string>("");
    const [services, setServices] = useState<IDoctorsService[]>([]);
    const [clients, setClients] = useState<IClientsSave[]>([]);
    const navigate = useNavigate();




    const saveAppointment = async (data: formData) => {
        await AppointmentServices.Create(data);
        navigate("/panel/appointments")
    }

    const loadClients = useCallback(async () => {
        const data = await ClientsServices.getAll();
        setClients(data);
    }, [])

    const loadDoctors = useCallback(async () => {
        const data = await DoctorsServices.getAll();
        setDoctors(data);
    }, [])

    const loadServices = useCallback(async () => {
        if (!IdDoctor) {
            return;
        }
        const data = await DoctorsServices.getDoctorService(IdDoctor);
        setServices(data);
    }, [IdDoctor])

    useEffect(() => {
        loadServices();
    }, [IdDoctor])

    useEffect(() => {
        loadClients();
        loadDoctors();
    }, [])


    return (
        <>
            <div className='container-fluid mt-4'>

                <div className="row">
                    <div className="col-lg-4 mt-2">
                        <h2 className='title-color'>Novo Agendamento</h2>
                    </div>
                    <form onSubmit={handleSubmit(saveAppointment)}>
                        <div className="col-12 mt-3">
                            <label htmlFor="doctor" className='form-label'>Paciente</label>
                            <div className="form-control mb-2">
                                <select {...register("clientId")} id="doctor">
                                    <option value="">Selecione o paciente.</option>
                                    {clients.map(client => (
                                        <option key={client.id} value={client.id}>{client.name}</option>
                                    ))}

                                </select>
                            </div>
                            <small className='text-danger p-0 m-0'>{errors && errors.clientId?.message}</small>
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="doctor" className='form-label'>Médico</label>
                            <div className="form-control mb-2">
                                <select {...register("doctorId")} id="doctor" onChange={(e) => setIdDoctor(e.target.value)}>
                                    <option value="">Selecione o médico</option>
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
                                <select {...register("serviceId")} id="service">
                                    <option value="">Selecione o serviço</option>
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
                                />
                                <small className='text-danger p-0 m-0'>{errors && errors.bookingDate?.message}</small>
                            </div>

                            <div className="col-6 mt-3">
                                <label htmlFor="bookingDate" className='form-label'>Hora</label>
                                <div className="form-control mb-2">
                                    <select {...register("bookingHour")} id="bookingHour">
                                        <option value="">Selecione a hora</option>
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
