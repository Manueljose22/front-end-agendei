import { z } from "zod";
import { InputForm } from "../../components/input/InputForm"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { DoctorsServices } from "../../services/doctors/DoctorsServices";



type props ={
    handleClick: () => void;
}


const schema = z.object({
    name: z.string().min(2, "campo obrigatório."),
    especialty: z.string().min(2, "campo obrigatório."),
    photo: z.string().min(1, "campo obrigatório."),
})

type formData = z.infer<typeof schema>;


export const DoctorsAdd = ({handleClick}: props) => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<formData>({
        resolver: zodResolver(schema)
    });

    const saveDoctors = async (data: formData) => {
        await DoctorsServices.create(data);
        navigate("/panel/doctors");
    }

    return (
        <div className="container-fluid">
            <div className="my-4">
                <h2 className="title-color">Novo Médico</h2>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit(saveDoctors)}>
                    <InputForm
                        label="Nome completo"
                        type="text"
                        register={register("name")}
                        errors={errors && errors.name?.message!}
                    />
                    <InputForm
                        label="Especialidade" 
                        type="text"
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
                        <button onClick={handleClick} className='btn btn-outline-primary me-3 link-btn-new-appoint'>Cancelar</button>
                        <button type='submit' className='btn btn-primary'>Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
