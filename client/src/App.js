import './App.css';
import {Route, Routes} from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className='w-full hello'>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='login/' element={<Login/>}/>
        <Route path='signup/' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
