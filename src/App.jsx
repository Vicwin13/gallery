import { BrowserRouter, Routes } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Routes path='/' element={<Login />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
