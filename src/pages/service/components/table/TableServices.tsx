import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { servicesSave } from "../../../../services/service/types";





type ITableProps = {
    data: servicesSave[];
    handleDelete: (id: string) => void;
}



export const TableServices = ({data, handleDelete}: ITableProps) => {
    return (
        <div className="container-fluid mt-4 scroll-over">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Serviços</th>
                        <th scope="col">Descrição</th>
                        <th scope="col" className="col-buttons"> </th>
                    </tr>
                </thead>
                <tbody>
                    { data.map((item, indx) => (

                        <tr key={indx}>
                            <th scope="col">{indx+1}</th>
                            <td scope="col">{item.title}</td>
                            <td scope="col">{item.description}</td>
                            <td scope="col">
                                <div className="m-0 p-0 end">
                                    <Link to={`/panel/services/edit/${item.id}`} className="btn btn-sm btn-primary d-inline me-2 text-center text-white">
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
