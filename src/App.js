import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from "./Pages/Signup";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/signUp" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
