

type buttonProps ={
    text: string;
    isActive: boolean
}




export const Button = ({text, isActive}: buttonProps) =>{
    return (
        <button className="btn btn-primary w-100 my-3" type="submit"
            disabled={isActive}
        >
            {text}
        </button>
    )
}