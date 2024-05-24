import logo from './logo.svg';
import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Post from './pages/PostBlog'
import Read from './pages/ReadBlogs'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Chatbot from './Components/Chatbot';
function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Chatbot />
   
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/Post' element={<Post/>} />
    <Route path='/Read' element={<Read/>} />
   </Routes>
   <Footer />
   </BrowserRouter>
   
  );
}

export default App;