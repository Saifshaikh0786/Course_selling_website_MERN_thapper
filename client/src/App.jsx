import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Register } from "./pages/Registration"; 
import { Service } from "./pages/service";
import { Login } from "./pages/login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Conatct/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
