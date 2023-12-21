import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import "./index.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Adduser from "./components/Adduser";
import Updateuser from "./components/Updateuser";

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/addusers" element={<Adduser />} />
          <Route path="/update/:id" element={<Updateuser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
