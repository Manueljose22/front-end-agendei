import { useEffect, useState } from "react";



type IProps = {
    message: string;
}


export const AlertMessage = ({ message }: IProps) => {

    const [showMessage, setShowMessage] = useState<boolean>(false);

    useEffect(() => {
        
        if (message) {
            setShowMessage(true);
        }

        const timer = setTimeout(() => {
            setShowMessage(false)
        }, 5000);

        return () => clearTimeout(timer);
    }, [message]);


    return (
        <div className="message">
            {
                showMessage && message &&
                (<div className="bg-danger-subtle text-danger text-center p-2 rounded border-danger" >
                    {message}
                </div>)
            }
        </div>
    )
}
