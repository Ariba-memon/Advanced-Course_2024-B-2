import logo from './logo.svg';
import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import {About }from './pages/About'
import Contact from './pages/contact'
import Navbar from './Components/Navbar';
import Dialogflow from './Components/Dialogflow';
function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Dialogflow />
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
   </Routes>
   
   </BrowserRouter>
   
  );
}

export default App;
