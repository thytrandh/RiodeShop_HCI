import { AuthContext } from "./context/authContext";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllProduct,
  getSuggestProduct,
} from "./redux/slice/Product/productSlice";

function App() {
  const [isAuth, setAuth] = useState(false);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getAllProduct());
    dispath(getSuggestProduct());
  },[]);
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
