import { Link } from "react-router-dom"
import { TableServices } from "./components/table/TableServices"
import { useCallback, useEffect, useState } from "react"
import { servicesSave } from "../../services/service/types"
import { serviceServices } from "../../services/service/ServiceServices"




export const Services = () => {

    const [services, setServices] = useState<servicesSave[]>([]);


    const handleDelete = async (id: string) => {
        setServices(services.filter(e => e.id !== id));
        await serviceServices.deleteById(id);
    }

    const loadServices = useCallback(async () => {
        const data = await serviceServices.getAll();
        setServices(data);
    }, [])

    useEffect(() => {
        loadServices();
    }, [])


    return (
        <div className="container-fluid py-3">
            <div className="d-flex align-items-center justify-content-between">
                <div className="title">
                    <h2 className="title-color">Serviços</h2>
                </div>
                <div className="b">
                    <Link className="btn btn-primary text-white" to={"/panel/services/add"}>Novo serviço</Link>
                </div>
            </div>

            <TableServices data={services} handleDelete={handleDelete} />

        </div>
    )
}
