import Homepage from './components/Homepage' ;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path = "/" element={<Homepage/>}/>
    <Route path = "/Login" element={<Login/>}/>
    
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
