import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'

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