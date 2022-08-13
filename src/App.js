import logo from './logo.svg';
import './App.css';
import Navbar from './component/Main/Navbar'
import Home from './component/Main/Home';
import Footer from './component/Main/Footer';
import './component/MainCard/Footers.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import About from './component/Main/About';
import Donate from './component/Main/Donate';
import Gallery from './component/Main/Gallery';
import Notice from './component/Main/Notice';
import Freeeducation from './component/MainCard/Freeeducation';
import Scholarship from './component/MainCard/Scholarship';
import FreeTrip from './component/MainCard/FreeTrip';
import Slides from './component/Main/Slides';
import Help from './component/MainCard/Help'
import Teacher from './component/Login/Teacher';
import Student from './component/Login/Student';
import Navbar from './component/TeacherHome/Navbar'


function App() {
  return (
    <div>
      <BrowserRouter>

          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Notice' element={<Notice/>}/>
          <Route path='/Gallery' element={<Gallery/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Donate' element={<Donate/>}/>
          <Route path='/Freeeducation' element={<Freeeducation/>}/>
          <Route path='/Scholarship' element={<Scholarship/>}/>
          <Route path='/FreeTrip' element={<FreeTrip/>}/>
          <Route path='/Help' element={<Help/>}/>
          <Route path='/Teacher' element={<Teacher/>}/>
          <Route path='/Student' element={<Student/>}/>
          <Route path='/Navbar' element={<Navbar/>} />
          </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
