import { Link } from 'react-router-dom'
import { IDoctorsSave } from '../../../../services/doctors/types';
import { UseFormHandleSubmit } from 'react-hook-form';


type toolBarProps = {
    title: string;
    url: string;
    txtBtn: string;
    data: IDoctorsSave[];
    register: object;
    handleFilter: (search: IDoctorsSave) => void;
    handleSubmit: (UseFormHandleSubmit<IDoctorsSave>);
    handleOpen: () => void
}



export const ToolBar = ({title, txtBtn, url, data, register, handleFilter, handleSubmit, handleOpen }: toolBarProps) => {
    return (
        <div className='d-flex justify-content-between align-items-center mt-3 container-fluid px-4'>
            <div className='d-flex align-items-center'>
                <h2 className="d-inline title-color">{title}</h2>
                <button onClick={handleOpen} className="btn btn-outline-primary ms-3 link-btn-new-appoint">
                    {txtBtn}
                </button>
            </div>
             <form onSubmit={handleSubmit(handleFilter)}>
                    <div className="d-flex justify-content-end">

                        <div className="form-control ms-3 me-3">
                            <select id="doctors" {...register}>
                                <option value="0">Todos os medicos</option>
                                {data.map(d => (
                                    <option key={d.id} value={d.id}>{d.name}</option>
                                ))

                                }
                            </select>

                        </div>
                        <button className="btn btn-primary" onClick={() => handleFilter} >Filtrar</button>
                    </div>
                </form>
        </div>
    )
}

