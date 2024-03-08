import './App.css';
import {Route, Routes} from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Userdashboard from './components/Userdashboard'
import Doctorlogin from './components/Doctorlogin';
import Doctorssignup from './components/Doctorssignup';

function App() {
  return (
    <div className='w-full'>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='user/login/' element={<Login/>}/>
        <Route path='user/signup/' element={<Signup/>}/>
        <Route path='user/home/' element={<Userdashboard/>}/>
        <Route path='doctor/login' element={<Doctorlogin/>}/>
        <Route path='doctor/signup' element={<Doctorssignup/>}/>
      </Routes>
    </div>
  );
}

export default App;
