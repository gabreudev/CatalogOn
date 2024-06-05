import { BrowserRouter, Routes , Route} from "react-router-dom";
import { Home } from "../pages/home/home";
import { Login } from "../pages/login/login";
import { Produto } from "../pages/produto/produto";
import { Carrinho } from "../pages/carrinho/carrinho";
import { Cadastro } from "../pages/cadastro/cadastro";


export const Routs = () => {
  return (
    
    <BrowserRouter>
    <Routes>

      <Route path="/home" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/carrinho" element={<Carrinho/>}/>
      <Route path="/produto" element={<Produto/>}/>


    </Routes>
    </BrowserRouter>
  )
}

