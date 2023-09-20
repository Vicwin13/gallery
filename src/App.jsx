import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/SignIn" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
