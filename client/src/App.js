import './App.css';
import {Route, Routes} from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Userdashboard from './components/Userdashboard'

function App() {
  return (
    <div className='w-full'>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='login/' element={<Login/>}/>
        <Route path='signup/' element={<Signup/>}/>
        <Route path='home/' element={<Userdashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
