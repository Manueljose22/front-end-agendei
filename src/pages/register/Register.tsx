import { Link } from 'react-router-dom';
import { Button } from '../../components/button/Button';
import { Input } from '../../components/input/Input';
import { PageBackGround } from '../../components/template/Page';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useState } from 'react';
import { authContext } from '../../contexts/auth/authContext';
import { AlertMessage } from '../../components/alert/AlertMessage';



const schema = z.object({
    name: z.string().min(4, 'Informe seu nome.'),
    email: z.string().min(1, 'Informe seu email.'),
    password: z.string().min(4, 'No minimo 4 caracters.'),
    confirmPassword: z.string().min(4, 'No minimo 4 caracters.'),
})


type formData = z.infer<typeof schema>;


export const Register = () => {

    const { Register } = useContext(authContext);
    const [isActive, setIsActive] = useState<boolean>(false)
    const [msg, setMsg] = useState<string>('');

    const { register, handleSubmit, formState: { errors } } = useForm<formData>({
        resolver: zodResolver(schema)
    })

    const handleRegister = (data: formData) => {
        
        if (data.password !== data.confirmPassword) {
           return setMsg("As senhas são diferentes, por favor tente novamente!");
        }

        try{
            setIsActive(true);
            Register(data);

        } catch(error: any){
            if(error){
                setMsg(error.response?.data.message);
                setIsActive(false);
            } else{
                setMsg("Erro ao efectuar registro. Por favor tente mais tarde!");
            }
        }
    }

    return (
        <PageBackGround
            title={'Crie sua conta agora mesmo.'}
        >
            <div className="container mt-4 d-flex flex-column align-items-center">
                <div className="form w-75 px-4 mt-5 ">
                    <form onSubmit={handleSubmit(handleRegister)} >

                        <Input
                            type={"text"}
                            placeholder={"Nome completo"}
                            register={register('name')}
                            error={errors && errors.name?.message}
                        />
                        <Input
                            type={"email"}
                            placeholder={"Email"}
                            register={register('email')}
                            error={errors && errors.email?.message}
                        />

                        <Input
                            type={"password"}
                            placeholder={"Crie uma senha"}
                            register={register('password')}
                            error={errors && errors.password?.message}
                        />

                        <Input
                            type={"password"}
                            placeholder={"Confirme sua senha"}
                            register={register('confirmPassword')}
                            error={errors && errors.confirmPassword?.message}
                        />
                        <AlertMessage message={msg} />

                        <Button isActive={isActive} text='Criar conta' />
                    </form>
                </div>
                <div className="footer text-center mt-3">
                    <p>Já tenho conta. <Link className="text-decoration-none color-blue" to={'/'}>Acessar conta agora.</Link></p>
                </div>
            </div>
        </PageBackGround>
    )

}

