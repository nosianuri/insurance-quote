import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Aca from './Pages/Aca/Aca';
import Auto from './Pages/Auto/Auto';
import Car from './Pages/Car/Car';
import Contact from './Pages/Contact/Contact';
import FinalExpense from './Pages/FinalExpense/FinalExpense';
import Health from './Pages/Health/Health';
import Home from './Pages/Home/Home';
import HomeInsurance from './Pages/HomeInsurance/HomeInsurance';
import Life from './Pages/Life/Life';
import Medicare from './Pages/Medicare/Medicare';
import Motorcycle from './Pages/Motorcycle/Motorcycle';
import Privacy from './Pages/Privacy/Privacy';
import Terms from './Pages/Terms/Terms';
import Aos from 'aos';
import 'aos/dist/aos.css';
import StepForm from './Pages/stepForm/StepForm';
import U65One from './Pages/U65One/U65One';
import U65Two from './Pages/U65Two/U65Two';

function App() {
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <>
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/aca-insurance' element={<Aca />} />
     <Route path='/auto-insurance' element={<Auto />} />
     {/* <Route path='/car-insurance' element={<Car/>} /> */}
     <Route path='/finalexpense-insurance' element={<FinalExpense />} />
     <Route path='/health-insurance' element={<Health />} />
     <Route path='/home-insurance' element={<HomeInsurance />} />
     <Route path='/life-insurance' element={<Life />} />
     <Route path='/medicare-insurance' element={<Medicare />} />
     <Route path='/motorcycle-insurance' element={<Motorcycle />} />
     <Route path='/privacy-policy' element={<Privacy />} />
     <Route path='/about-us' element={<About />} />
     <Route path='/terms&use' element={<Terms />} />
     <Route path='/contact-us' element={<Contact />} />
     <Route path='/step-form' element={<StepForm />} />
     <Route path='/u65-1' element={<U65One />} />
     <Route path='/u65-2' element={<U65Two />} />
     </Routes>
    </>
  );
}

export default App;
