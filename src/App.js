import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Signup from "./Pages/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signUp" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
