import '../css/home.css'
import { Route, Routes } from "react-router-dom"
import Estoque from './Estoque'
import Movimentacao from './Movimentacao'
import Perfil from './Perfil'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import Nav from '../components/Nav'
import Produtos from './Produtos'

function Home() {
    return (<>
            <Header/>
            <main>
                <Nav/>
                <Routes>
                    <Route path='/*' element={<Main/>}></Route>
                    <Route path='/perfil' element={<Perfil/>}></Route>
                    <Route path='/produtos' element={<Produtos/>}></Route>
                    <Route path='/movimentacao' element={<Movimentacao/>}></Route>
                    <Route path='/estoque' element={<Estoque/>}></Route>
                </Routes>
            </main>
            <Footer/>
    </>)
}

export default Home 