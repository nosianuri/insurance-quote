import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aca from './Pages/Aca/Aca';
import Auto from './Pages/Auto/Auto';
import Car from './Pages/Car/Car';
import FinalExpense from './Pages/FinalExpense/FinalExpense';
import Health from './Pages/Health/Health';
import Home from './Pages/Home/Home';
import HomeInsurance from './Pages/HomeInsurance/HomeInsurance';
import Life from './Pages/Life/Life';
import Medicare from './Pages/Medicare/Medicare';
import Motorcycle from './Pages/Motorcycle/Motorcycle';

function App() {
  return (
    <>
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/aca-insurance' element={<Aca />} />
     <Route path='/auto-insurance' element={<Auto />} />
     <Route path='/car-insurance' element={<Car/>} />
     <Route path='/finalexpense-insurance' element={<FinalExpense />} />
     <Route path='/health-insurance' element={<Health />} />
     <Route path='/home-insurance' element={<HomeInsurance />} />
     <Route path='/life-insurance' element={<Life />} />
     <Route path='/medicare-insurance' element={<Medicare />} />
     <Route path='/motorcycle-insurance' element={<Motorcycle />} />
     </Routes>
    </>
  );
}

export default App;
