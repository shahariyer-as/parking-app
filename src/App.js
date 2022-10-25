
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import TotalParking from './components/Home/TotalParking';
import NavBar from './Shared/NavBar';

function App() {
  return (
    <div >
      <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<Home></Home> }></Route>
      <Route path='/totalParking' element={<TotalParking></TotalParking> }></Route>
    </Routes>
     
    </div>
  );
}

export default App;
