import React ,{useContext} from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AdminContext} from './context/AdminContext'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import Allappointments from './pages/Admin/Allappointments';
import AddDoctor from './pages/Admin/AddDoctor';
import Doctorslist from './pages/Admin/Doctorslist';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorAppointments from './pages/Doctor/DoctorAppointments';
import DoctorProfile from './pages/Doctor/DoctorProfile';

function App() {
  const { aToken } = useContext(AdminContext);
  const {dToken} = useContext(DoctorContext)

  return aToken || dToken ? (
    <div className='bg-[#F0FDF5]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          {/* Admin routes */}
          <Route path='/' element={<></>}/>
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/all-appointments' element={<Allappointments/>}/>
          <Route path='/add-doctor' element={<AddDoctor/>}/>
          <Route path='/doctor-list' element={<Doctorslist/>}/>

          {/* Doctor Routes */}
          <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
          <Route path='/doctor-appointments' element={<DoctorAppointments/>}/>
          <Route path='/doctor-profile' element={<DoctorProfile/>}/>

        </Routes>
      </div>
    </div>
  ):(
    <>
      <Login/>
      <ToastContainer/>
    </>
  )
}

export default App