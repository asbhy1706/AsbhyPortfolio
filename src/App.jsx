import './App.css'
import Navbar1 from './components/Navbar'
import First from './components/First'
import Api from './components/Api'
import JServer from './components/Json'
import Second from './components/Second'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Skills from './components/Skills'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Education from './components/Education'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ScrollToTop from './components/Scroll'

function App() {
  return (
    <div>
      <Router>
 <ScrollToTop/>
       <Navbar1/>
        <Routes>
        <Route path='/' element={ <First/>}/>
        <Route path='/second' element={ <Second/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/resume' element={ <Resume/>}/>
        <Route path='/skills' element={ <Skills/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/education' element={<Education/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
   )
}
export default App
