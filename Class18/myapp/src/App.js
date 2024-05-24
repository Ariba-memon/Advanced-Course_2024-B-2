import logo from './logo.svg';
import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './Components/Navbar';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
   <BrowserRouter>
  
   <Navbar />
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/articles' element={<ArticlesListPage/>} />
    <Route path='/articles/:articleId' element={<ArticlePage/>} />
   </Routes>
 
   </BrowserRouter>
   
  );
}

export default App;