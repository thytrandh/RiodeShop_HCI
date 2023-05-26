import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./context/authContext";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useState } from "react";

function App() {
  const [isAuth, setAuth] = useState(false);
  return (
    <>
      <AuthContext.Provider value={[isAuth, setAuth]}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
