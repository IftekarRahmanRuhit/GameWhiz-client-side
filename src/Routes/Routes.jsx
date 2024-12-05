import {createBrowserRouter} from "react-router-dom";
import Mainlayout from "../Components/MainLayout/Mainlayout";
import Home from "../Components/Pages/Home";
import ErrorPage from "../Components/Pages/ErrorPage";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import AllReviews from "../Components/Pages/AllReviews";
import AddReview from "../Components/Pages/AddReview";
import MyReviews from "../Components/Pages/MyReviews";
import GameWatchlist from "../Components/Pages/GameWatchlist";
import PrivateRoute from "../Components/PrivateRoute";
import ForgetPassword from "../Components/Pages/ForgetPassword";
import ReviewDetails from "../Components/Pages/ReviewDetails";


export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch('http://localhost:5010/highest-rated-reviews')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/allreviews',
            element: <AllReviews></AllReviews>,
            loader: ()=> fetch('http://localhost:5010/reviews')
        },
        {
            path:'/reviews/:id',
            element: <ReviewDetails></ReviewDetails>,
            loader: ({params})=> fetch(`http://localhost:5010/reviews/${params.id}`)
        },
        {
            path: '/addreview',
            element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
        },
        {
            path: '/myreviews',
            element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        },
        {
            path: '/gamewatchlist/:email',
            element: <PrivateRoute><GameWatchlist></GameWatchlist></PrivateRoute>,
            loader: ({params})=>fetch(`http://localhost:5010/gamewatchlist/${params.email}`)
        },
        {
            path: '/forgetpassword',
            element: <ForgetPassword></ForgetPassword>
        }
      ]
    },
  ]);