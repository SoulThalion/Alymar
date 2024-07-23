import { RouterProvider } from "react-router-dom"
import router from "./router/router"
import { useState } from "react"
import { UserContext } from './context/userContext'


function App() {
  const [user, setUser] = useState(null)
  return (
    <>
    <UserContext.Provider value={{user, setUser}}>
      <RouterProvider router={router}/>
    </UserContext.Provider>
    </>
  )
}

export default App
