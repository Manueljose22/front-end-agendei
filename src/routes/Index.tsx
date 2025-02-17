import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../pages/login/Login";
import { Register } from "../pages/register/Register";
import { Appointments } from "../pages/appointments/Appointments";
import { AppointmentAdd } from "../pages/appointments/AppointmentAdd";
import { AppointmentEdit } from "../pages/appointments/AppointmentEdit";
import { AuthContextProvider } from "../contexts/auth/authContext";
import { PanelAdmin } from "../pages/admin/PanelAdmin";
import { PrivateRoute } from "./PrivateRoutes";
import { Doctors } from "../pages/doctors/Doctors";
import { DoctorsEdit } from "../pages/doctors/DoctorsEdit";
import { Management } from "../pages/management/Management";
import { Services } from "../pages/service/Services";
import { ServiceAdd } from "../pages/service/ServiceAdd";





export const Index = () => {
  return (

    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
            <Route path={"/"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />

            <Route path={"/panel"} element={<PrivateRoute > 
              <PanelAdmin /> 
            </PrivateRoute>} />

            <Route path={"/panel"} element={<PanelAdmin />} >
              <Route path={"/panel/dashboard"} element={<p>Dashboard</p>} />
              <Route path={"/panel/management"} element={<Management />} />
              <Route path={"/panel/services"} element={<Services />} />
              <Route path={"/panel/services/add"} element={<ServiceAdd />} />
              <Route path={"/panel/services/edit/:id"} element={<ServiceAdd />} />
              <Route path={"/panel/appointments"} element={<Appointments />} />
              <Route path={"/panel/appointments/add"} element={<AppointmentAdd />} />
              <Route path={"/panel/appointments/edit/:id"} element={<AppointmentEdit />} />
              <Route path={"/panel/doctors/"} element={<Doctors />} />
              <Route path={"/panel/doctors/edit/:id"} element={<DoctorsEdit />} />
            </Route>
            
            <Route path={"*"} element={<p>Não existe</p>} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}
