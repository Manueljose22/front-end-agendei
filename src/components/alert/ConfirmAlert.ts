import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';


type ConfirmAlertProps ={
    message: string;
    confirm: (id: string) => void
    title: string;
}



const ConfirmAlert = ({confirm, title, message }: ConfirmAlertProps) =>{
    return(
        confirmAlert({
            title,
        message,
        buttons:[
            {
                label: "Sim",
                onClick: () => confirm
            },
            {
                label: "Cancelar",
                 onClick: ()=> {}
            },
        ]
        })
    )
}

export default ConfirmAlert;
   