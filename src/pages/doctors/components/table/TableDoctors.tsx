import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IDoctorsSave } from "../../../../services/doctors/types";





type ITableProps = {
    data: IDoctorsSave[];
    handleDelete: (id: string) => void;
}



export const TableDoctors = ({data, handleDelete}: ITableProps) => {
    return (
        <div className="container-fluid mt-5 px-4">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Médico</th>
                        <th scope="col">Especialidade</th>
                        <th scope="col" className="col-buttons"> </th>
                    </tr>
                </thead>
                <tbody>
                    { data.map((item, indx) => (

                        <tr key={indx}>
                            <th scope="col">{indx+1}</th>
                            <td scope="col">{item.name}</td>
                            <td scope="col">{item.especialty}</td>
                            <td scope="col">
                                <div className="m-0 p-0 end">
                                    <Link to={`/panel/doctors/edit/${item.id}`} className="btn btn-sm btn-primary d-inline me-2 text-center text-white">
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
