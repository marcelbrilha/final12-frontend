import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Administrative from "./pages/Administrative";

function PageRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/adm" exact element={<Administrative />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes;
