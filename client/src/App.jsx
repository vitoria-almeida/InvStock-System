import { Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Cadastro from "./components/login/Cadastro"

function App() {
  return (
      <div>
        <Routes>
          <Route path='/*' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/cadastro' element={<Cadastro/>}></Route>
        </Routes>
      </div>
  )
}

export default App
