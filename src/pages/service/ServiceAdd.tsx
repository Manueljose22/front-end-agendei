import { z } from "zod"
import { InputForm } from "../../components/input/InputForm"
import { useForm } from "react-hook-form"
import { servicesRequest, servicesSave } from "../../services/service/types"
import { Link, useNavigate, useParams } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { serviceServices } from "../../services/service/ServiceServices"
import { useEffect, useState } from "react"



const schema = z.object({
    title: z.string().min(2, "campo obrigatório."),
    description: z.string().min(2, "campo obrigatório."),
})

type formData = z.infer<typeof schema>


export const ServiceAdd = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [service, setService] = useState<servicesSave>();

    const { handleSubmit, register, formState: { errors } } = useForm<servicesRequest>({
        resolver: zodResolver(schema)
    });


    const saveService = async (data: formData) => {
        if (id) {
            await serviceServices.update(id, data);
        } else {
            // await serviceServices.create(data);
        }
        navigate("/panel/services");
    }

    const loadService = async () => {
        if (!id) {
            return;
        }
        const data = await serviceServices.getById(id);
        setService(data);
    }

    useEffect(() => {
        loadService();
    }, [id])

    return (
        <div className="container">
            <div className="title my-3">
                {
                    id ? <h2 className="title-color">Editar Serviço</h2> :
                        <h2 className="title-color">Novo Serviço</h2>
                }

            </div>
            <form onSubmit={handleSubmit(saveService)}>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <InputForm
                            label={"title"}
                            register={register("title")}
                            type={"text"}
                            errors={errors && errors.title?.message!}
                            value={id && service?.title}
                        />
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <InputForm
                            label={"description"}
                            register={register("description")}
                            type={"text"}
                            errors={errors && errors.description?.message!}
                            value={id && service?.description}

                        />
                    </div>
                    <div className="col-12 text-end mt-4">
                        <Link to={"/panel/services"} className='btn btn-outline-primary me-3 link-btn-new-appoint'>Cancelar</Link>
                        <button type='submit' className='btn btn-primary'>Salvar</button>
                    </div>
                </div>

            </form>

        </div>
    )
}
