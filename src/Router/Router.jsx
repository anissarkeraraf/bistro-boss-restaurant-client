import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../LauOut/Main";
import Home from "../Pages/Home/Home/Home";
import Manu from "../Pages/Manu/Manu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Deshboard from "../LauOut/Deshboard";
import Cart from "../Pages/Deshboard/Cart/Cart";
import AllUsers from "../Pages/Deshboard/AllUsers/AllUsers";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/manu',
          element: <Manu></Manu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        }, 
        {
          path: '/secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path:'/dashboard',
      element: <PrivateRoute><Deshboard></Deshboard></PrivateRoute>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        },


        // Admin Route
        {
          path: 'allUsers',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);