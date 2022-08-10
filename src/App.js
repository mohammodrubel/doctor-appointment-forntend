import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './Components/Home/Home';
import Appointment from './Components/Appointment/Appointment';
import Registration from './Components/Authintication/Registration/Registration';
import Login from './Components/Authintication/Login/Login';
import RequireAuth from './Components/Authintication/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashbord from './Components/Dashbord/Dashbord'
import MyAppointment from './Components/Dashbord/MyAppointment/MyAppointment';
import MakeAdmin from './Components/Dashbord/MakeAdmin/MakeAdmin';
import Admin from './Components/Authintication/Admin/Admin';
import NotFound from './Components/Home/NotFound/NotFound';
import AboutUs from './Components/AboutUs/AboutUs'
import ContactUs from './Components/ContactUs/ContactUs';
import UserMessage from './Components/Dashbord/UserMessage/UserMessage';
import WebsiteUser from './Components/Dashbord/WebsiteUser/WebsiteUser';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/appointment' element={<RequireAuth><Appointment /></RequireAuth>}></Route>
                <Route path='/registration' element={<Registration />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/about' element={<AboutUs />}></Route>
                <Route path='/contactus' element={<ContactUs />}></Route>
                <Route path='/dashbord' element={<Admin><Dashbord /></Admin>}>
                  <Route path='/dashbord/myappointment' element={<MyAppointment></MyAppointment>}></Route>
                  <Route path='/dashbord/createadmin' element={<MakeAdmin></MakeAdmin>}></Route>
                  <Route path='/dashbord/usermessage' element={<UserMessage />}></Route>
                  <Route path='/dashbord/webuser' element={<WebsiteUser />}></Route>
                </Route>
                <Route path='/*' element={<NotFound></NotFound>}></Route>
            </Routes>
          </BrowserRouter>
        <ToastContainer />
    </div>
  );
}

export default App;
