import { Link, } from "react-router-dom";
import { PageBackGround } from "../../components/template/Page";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { authContext } from "../../contexts/auth/authContext";
import { AlertMessage } from "../../components/alert/AlertMessage";



const schema = z.object({
    email: z.string().min(1, 'O email é obrigatório!'),
    password: z.string().min(1, 'A senha é obrigatório!')
})

type formData = z.infer<typeof schema>;


export const Login = () => {

    const [isActive, setIsActive] = useState<boolean>(false);
    const [msg, setMsg] = useState<string>('');
    const { Login } = useContext(authContext);

    const { register, handleSubmit, formState: { errors } } = useForm<formData>({
        resolver: zodResolver(schema)
    });


    const handleAccess = async (data: formData) => {
        try{
            setIsActive(true);
            await Login(data)
        } catch (error: any){
            if(error){
                setMsg(error.response?.data.message);
                setIsActive(false);
            } else{
                setMsg("Erro ao efectuar login. Por favor tente mais tarde!");
            }
        }
    }


    return (
        <PageBackGround
            title="Gerencie seus agendamentos de forma descomplicada."
        >
            <div className="container mt-5 d-flex flex-column align-items-center">
                <div className="form w-75 px-4 my-5 ">
                    <form onSubmit={handleSubmit(handleAccess)} >

                        <Input
                            type={"email"}
                            placeholder={"Email"}
                            register={register('email')}
                            error={errors && errors.email?.message}
                        />

                        <Input
                            type={"password"}
                            placeholder={"Senha"}
                            register={register('password')}
                            error={errors && errors.password?.message}
                        />

                        <AlertMessage message={msg}  />

                        <Button text='Acessar' isActive={isActive} />
                    </form>
                </div>
                <div className="footer text-center mt-5">
                    <p>Não tenho conta. <Link className="text-decoration-none color-blue" to={'/register'}>Criar conta agora.</Link></p>
                </div>
            </div>
        </PageBackGround>
    )
}
