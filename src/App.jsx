import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dash from "./Components/Dashboard";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Dash from './Components/Dash'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dash />} />
          <Route path="/SignIn" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
