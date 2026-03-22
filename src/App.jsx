import Signup from "./components/signup"
import Login from "./components/login"
import Onboarding from "./components/onboarding"
import Builder from "./components/builder"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const App = () => {
  return (
    <RouterProvider router={createBrowserRouter([
      {
        path: "/",
        element: <Signup />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/onboarding",
        element: <Onboarding />
      },
      {
        path: "/builder",
        element: <Builder />
      }
    ])} />
  )
}

export default App  
