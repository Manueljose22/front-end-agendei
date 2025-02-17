

export interface IOptions {
    id: string;
    name: string
}


type SelectProps = {
    name: string;
    register: object;
    label?: string;
    error?: string;
    options: IOptions[]
}


export const Select = ({ name, register, options, error, label }: SelectProps) => {
    return (
        <div className='select'>
            <label className='form-label' htmlFor={name}>{label}</label>

            <div className='form-control'>
                <select id={name} {...register}>
                    <option value="">Selecione o {name}</option>
                    {options.map((item) => (
                        <option value={item.id}>{item.name}</option>
                    ))

                    }
                </select>
            </div>
            <p className="text-danger m-0 p-0 ">{error}</p>
        </div>
    )
}
