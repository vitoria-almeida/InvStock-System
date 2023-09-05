import { createContext, useState } from "react"

export const AuthContext = createContext()

const ProvideAuth = ({ children }) => {
  const getSession = () => {
    return JSON.parse(localStorage.getItem('session'));
  };

  const setSessionInLocalStorage = (token) => {
    localStorage.setItem('session', JSON.stringify(token))
    return true
  };  

  const auth = getSession()

  const [session, setSession] = useState(auth || '')

  const setAuth = (token) => {
    setSession(token);
    setSessionInLocalStorage(token);
  }

  const { user, token } = session

  return (
    <AuthContext.Provider value={{ user, token, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default ProvideAuth