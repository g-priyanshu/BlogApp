
import './App.css';
import Create from './Components/Create';
import Navbar from './Components/Navbar';
import Read from './Components/Read'
import View from './Components/View';
import Update from './Components/Update';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'

function App() {
  return (
  <div className=''>
    <Navbar></Navbar>
    <BrowserRouter>
    <Routes> 
    <Route exact path ="/" element={<Create/>} />
    <Route exact path ="/all" element={<Read/>} />
    <Route exact path ="/View" element={<View/>} />
    <Route exact path ="/Update" element={<Update/>} />
    </Routes>
    
    </BrowserRouter>
   
  </div>
  );
}

export default App;
