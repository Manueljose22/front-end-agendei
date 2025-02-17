

type InputProps = {
        type: string;
        placeholder?: string;
        register: object;
        label?: string;
        error?: string;
}



export const Input = ({register, type, placeholder, error, label}: InputProps) =>{
    return(
        <div className="mb-3">
            {/* <label className="form-label m-0 p-0" htmlFor={label}>{label}</label> */}
           <div className="form-control">
            <input 
                    type={type} 
                        {...register} 
                        placeholder={placeholder}
                />
           </div>
            <p className="text-danger m-0 p-0 ">{error}</p>
        </div>
    )
}