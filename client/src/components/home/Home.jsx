import '../css/home.css'
import { Route, Routes } from "react-router-dom"
import Estoque from './pages/Estoque'
import Footer from "../Footer"
import Header from "../Header"
import Main from './pages/Main'
import Movimentacao from './pages/Movimentacao'
import Nav from "../Nav"
import Perfil from "./pages/Perfil"

function Home() {
    return (<>
            <Header/>
            <main>
                <Nav/>
                <Routes>
                    <Route path='/*' element={<Main/>}></Route>
                    <Route path='/perfil' element={<Perfil/>}></Route>
                    <Route path='/movimentacao' element={<Movimentacao/>}></Route>
                    <Route path='/estoque' element={<Estoque/>}></Route>
                </Routes>
            </main>
            <Footer/>
    </>)
}

export default Home 