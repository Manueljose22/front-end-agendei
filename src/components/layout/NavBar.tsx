import { Link } from "react-router-dom"
import { useContext } from "react";
import { authContext } from "../../contexts/auth/authContext";
import { BiMenu } from "react-icons/bi";



interface INavBarProps {
    toggleSidebar: () => void;
}




export const NavBar = ({ toggleSidebar }: INavBarProps) => {

    const { logout} = useContext(authContext);


    return (
        <header className="bg-header shadow container-fluid d-flex align-items-center justify-content-between ps-3 pe-5  py-3">
            <div className="navBar d-flex align-items-center gap-4">
                <div className="logo">
                    <BiMenu onClick={toggleSidebar} cursor={"pointer"} size={25} color="#fff"/>
                </div>
            </div>
            <div className="dropdown">
                <button className="btn-user dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {localStorage.getItem("user")}
                </button>
                <ul className="dropdown-menu">
                    <li><Link to={"/profile"} className="dropdown-item text-dark" type="button">Perfil</Link></li>
                    <li><button onClick={logout} className="dropdown-item text-dark" type="button">Sair</button></li>
                </ul>
            </div>



        </header >
    )
}
