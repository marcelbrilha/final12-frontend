import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Administrative from "./pages/Administrative";
import CreateUpdate from "./pages/CreateUpdate";
import { isAuthorized } from "./services/login";

function PrivateRoute({ children }) {
  const auth = isAuthorized();
  return auth ? children : <Navigate to="/login" />;
}

function PageRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />

        <Route
          path="/adm"
          element={
            <PrivateRoute>
              <Administrative />
            </PrivateRoute>
          }
        />

        <Route
          path="/subscription"
          element={
            <PrivateRoute>
              <CreateUpdate />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes;
