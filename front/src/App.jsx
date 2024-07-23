import { RouterProvider } from "react-router-dom"
import router from "./router/router"
import { useEffect, useState } from "react"
import { UserContext } from './context/userContext'
import { getUserByToken } from "./services/users.service"


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token && !user) {
      getUserByToken().then((result) => setUser(result))
    }
  }, [])

  return (
    <>
    <UserContext.Provider value={{user, setUser}}>
      <RouterProvider router={router}/>
    </UserContext.Provider>
    </>
  )
}

export default App
