




import { z } from "zod";
import { InputForm } from "../../components/input/InputForm"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DoctorsServices } from "../../services/doctors/DoctorsServices";
import { useCallback, useEffect, useState } from "react";
import { IDoctorsSave } from "../../services/doctors/types";





const schema = z.object({
    name: z.string().min(2, "campo obrigatório."),
    especialty: z.string().min(2, "campo obrigatório."),
    photo: z.string().min(1, "campo obrigatório."),
})

type formData = z.infer<typeof schema>;


export const DoctorsEdit = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [doctor, setDoctor] = useState<IDoctorsSave>()

    const { register, handleSubmit, formState: { errors } } = useForm<formData>({
        resolver: zodResolver(schema)
    });

    const saveDoctors = async (data: formData) => {
        await DoctorsServices.update(id!, data);
        navigate("/panel/doctors");
    }

    const loadDoctor = useCallback(async ()=>{
        const data = await DoctorsServices.getById(id!);
        setDoctor(data)
    },[])

    useEffect(()=>{
        loadDoctor();
    },[])

    return (
        <div className="container-fluid">
            <div className="my-4">
                <h2 className="title-color">Editar Médico</h2>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit(saveDoctors)}>
                    <InputForm
                        label="Nome comple"
                        type="text"
                        value={doctor?.name}
                        register={register("name")}
                        errors={errors && errors.name?.message!}
                    />
                    <InputForm
                        label="Especialidade" 
                        type="text"
                        value={doctor?.especialty}
                        register={register("especialty")}
                        errors={errors && errors.especialty?.message!}
                    />
                    <InputForm 
                        label="Foto" 
                        type="text" 
                        register={register("photo")} 
                        errors={errors && errors.photo?.message!}
                        />

                    <div className="col-12 text-end mt-4">
                        <Link to={"/panel/doctors"} className='btn btn-outline-primary me-3 link-btn-new-appoint'>
                            Cancelar
                        </Link>
                        <button type='submit' className='btn btn-primary'>Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

