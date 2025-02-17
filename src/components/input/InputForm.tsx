

type IInputProps ={
    type: string;
    register: object;
    label: string;
    errors: string;
    value?: string;
}


export const InputForm = ({label, register, type, errors, value}: IInputProps) => {
  
    return (
    <div className="mb-3">
        <label>{label}</label>
        <div className="form-control mt-2">
            <input type={type} {...register} defaultValue={value} />
        </div>
        <small className='text-danger p-0 m-0'>{errors}</small>
    </div>
  )
}
