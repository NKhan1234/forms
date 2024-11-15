import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PassReset from "./pages/PassReset";
import Dashboard from "./pages/Dashboard";
import FormBuilder from "./pages/FormBuilder";

function App() {
  return (
    <div className="container">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/passreset' element={<PassReset />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path="/form/:formId" element={<FormBuilder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
