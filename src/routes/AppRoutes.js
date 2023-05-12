import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  CATEGORIES_PAGE,
  CHECKOUT_PAGE,
  CONTACT_PAGE,
  MY_ACCOUNT_PAGE,
  PRODUCTS_PAGE,
} from "../settings/constant";
import PrivateRoute from "./PrivateRoute";
import AuthLayout from "../layout/auth-layout";
import Default from "../layout/default";
import Login from "../containers/Auth/Login/Login";
import Register from "../containers/Auth/Register/Register";

const LoginPage = React.lazy(() => import("../containers/Auth/Login/Login"));
const RegisterPage = React.lazy(() => import("../containers/Auth/Register/Register"));

const HomePage = React.lazy(() => import("../containers/DefaultPage/Home/Home"));
const CategoriesPage = React.lazy(() => import("../containers/DefaultPage/Categories/Categories"));
const ProductsPage = React.lazy(() => import("../containers/DefaultPage/Products/Products"));
const ContactPage = React.lazy(() => import("../containers/DefaultPage/Contact/Contact"));

const MyAccountPage = React.lazy(() => import("../containers/PrivatePage/MyAccount/MyAccount"));
const CheckOutPage = React.lazy(() => import("../containers/PrivatePage/CheckOut/CheckOut"));


const AppRoutes = () => {

  const Notfound = () => {
    return <>Notfound</>;
  } 

  const Loader = () => {
    return <>Loader</>;
  };

  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Default */}

      <Route
        path="/"
        element={
          <React.Suspense fallback={<Loader />}>
            <Default />
          </React.Suspense>
        }
      >
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loader />}>
              <HomePage />
            </React.Suspense>
          }
        />

        <Route
          path={CATEGORIES_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <CategoriesPage />
            </React.Suspense>
          }
        />

        <Route
          path={PRODUCTS_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <ProductsPage />
            </React.Suspense>
          }
        />

        <Route
          path={CONTACT_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <ContactPage />
            </React.Suspense>
          }
        />

        <Route
          path={MY_ACCOUNT_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <PrivateRoute>
                <MyAccountPage />
              </PrivateRoute>
            </React.Suspense>
          }
        />

        <Route
          path={CHECKOUT_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <PrivateRoute>
                <CheckOutPage />
              </PrivateRoute>
            </React.Suspense>
          }
        />
      </Route>

      <Route path="*" element={<Notfound />}></Route>

    </Routes>
  );
};

export default AppRoutes;
