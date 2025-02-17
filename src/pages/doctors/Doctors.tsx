import React, { useCallback, useEffect, useState } from 'react';
import { IDoctorsSave } from '../../services/doctors/types';
import { useForm } from 'react-hook-form';
import { DoctorsServices } from '../../services/doctors/DoctorsServices';
import { ToolBar } from './components/toolbar/ToolBar';
import { TableDoctors } from '../doctors/components/table/TableDoctors';
import { DoctorsAdd } from './DoctorsAdd';
import { Modal } from '../../components/Modal/Modal';






export const Doctors = () => {
    const [doctors, setDoctors] = useState<IDoctorsSave[]>([])
    const {register, handleSubmit} = useForm<IDoctorsSave>()
    const [isOpen, setOpen] = useState<boolean>(false)

    const openModal = () =>{
        setOpen(!isOpen)
    }

    const handleFilter = async (search: IDoctorsSave) =>{
        if(search.name === "0"){
            loadDoctors()
        }
        const data = await DoctorsServices.getAll(search.name);
        setDoctors(data);
    }

    const handleDelete = async (id: string) =>{
        setDoctors(doctors.filter(e => e.id !== id))
        await DoctorsServices.deleteDoctor(id);
    }

    const loadDoctors = useCallback(async ()=> {
        const data = await DoctorsServices.getAll();
        setDoctors(data)
    },[])

    useEffect(()=>{
        loadDoctors();
    },[])

  return (
    <section>
         <ToolBar
                title="Médicos"
                txtBtn="Novo médico"
                url=""
                data={doctors}
                handleFilter={handleFilter}
                register={register("name")}
                handleSubmit={handleSubmit}
                handleOpen={openModal}
        />
        <TableDoctors data={doctors} handleDelete={handleDelete}/>
        <Modal  isOpen={isOpen} setOpen={setOpen} ><DoctorsAdd handleClick={openModal}/></Modal>
    </section>
  )
}
