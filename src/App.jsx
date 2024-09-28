import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./componets/Home";
import Admin from "./componets/Admin";


const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App; 