
//import './App.css';

import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Footer from "./components/footer/Footer";


function App() {
  const {user}=useContext(Context);
  return (
    <BrowserRouter>
    <div className="App">
      <Topbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path='/register' element={user?<Homepage/> : <Register/>}></Route>
        <Route path='/login' element={user?<Homepage/> : <Login/>}></Route>
        <Route path='/write' element={user?<Write/> : <Register/>}></Route>
        <Route path='/settings' element={user?<Settings/> : <Register/>}></Route>
        <Route path='/post/:id' element={<Single/>}></Route>
      </Routes>
      <Footer/>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
