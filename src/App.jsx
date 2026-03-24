import Signup from "./components/signup"
import Login from "./components/login"
import Onboarding from "./components/onboarding"
import Builder from "./components/builder"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Profile from "./components/profile"
const App = () => {
  return (
    <RouterProvider router={createBrowserRouter([
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/onboarding",
        element: <Onboarding />
      },
      {
        path: "/builder",
        element: <Builder />
      },
      {
        path: "/profile",
        element: <Profile />
      }
    ])} />
  )
}

export default App  
