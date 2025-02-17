import { FaEdit, FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom";
import { IAppointmentSave } from "../../services/appointments/types";





interface ITableProps{
    data: IAppointmentSave[];
    handleDelete: (idAppointment: string) => void
}



export const Table = ({data, handleDelete}: ITableProps) => {
    return (
        <div className="container-fluid mt-5 px-4">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Paciente</th>
                        <th scope="col">Médico</th>
                        <th scope="col">Serviço</th>
                        <th scope="col">Data / Hora</th>
                        <th scope="col" >Valor</th>
                        <th scope="col" className="col-buttons"> </th>
                    </tr>
                </thead>
                <tbody>
                    { data.map((item, indx) => (

                        <tr key={indx}>
                            <th scope="col">{indx+1}</th>
                            <td scope="col">{item.username}</td>
                            <td scope="col">{item.doctor}</td>
                            <td scope="col">{item.service}</td>
                            <td scope="col">{new Intl.DateTimeFormat("pt-BR", {dateStyle: "short"}).format(new Date(item.booking_date))}  
                                <span className="text-end"> - {item.booking_hour}</span></td>
                            <td scope="col">{new Intl.NumberFormat("AO", {style: "currency", currency: "Akz"} ).format(item.price)  }</td>
                            <td scope="col">
                                <div>
                                    <Link to={`/panel/appointments/edit/${item.id}`} className="btn btn-sm btn-primary d-inline me-2 text-center text-white">
                                        <FaEdit size={15} />
                                    </Link>
                                    <button onClick={()=> handleDelete(item.id)} className="btn btn-sm btn-danger">
                                        <FaTrash />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                        
                    }
                </tbody>
            </table>
        </div>
    )
}
