import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from "./Pages/Signup";
import UpdateTask from './Pages/UpdateTask';
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div style={{fontFamily:"poppins"}}>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/signUp" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/task" element={<UpdateTask/>}/>
        {/* <Route path="/task:id" element={<Home/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
