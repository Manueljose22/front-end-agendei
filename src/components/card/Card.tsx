import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


type props = {
    title: string;
    text: string;
    url: string;
}



export const Card = ({ title, text, url }: props) => {
    return (
        <div className='card p-3 h-100 d-flex flex-column justify-content-between'>
            <h4 className='title-color'>{title}</h4>
            <div className="text">
                <p>{text}</p>
            </div>
            <div className="btns mt-2">
                <Link className='btn btn-primary text-white float-start' to={url} >
                    Acessar <FaArrowAltCircleRight />
                </Link>
            </div>
        </div>
    )
}
