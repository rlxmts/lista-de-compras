import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ListaDeCompras from "./components/ListaDeCompras";
import Wpp from "./components/Wpp";
function App() {

  const cores = [
    {
      categoria: 'Mercearia em geral',      
    },
    {
      categoria: 'Padaria',      
    },
    {
      categoria: 'Bebidas',
    },
    {
        categoria: 'Guloseimas',        
    },
    {
        categoria: 'Naturais',        
    },
    {
        categoria: 'Laticínios',        
    },
    {
        categoria: 'Carnes',
    },
    {
      categoria: 'Limpeza',
    },
    {
      categoria: 'Higiene',
    },
    {
      categoria: 'Pet',
    } 
]

  const [produtos, setProdutos] = useState([]);

  const recebeValor = (produto)=>{
    setProdutos([...produtos, produto]); 
  }

  return (
    <div className="App">
        <Header />
        <Banner />
        <Formulario cores={cores} valoresCapturados={valor => recebeValor(valor)}/>
        <ListaDeCompras produto={produtos} />
        <Wpp />
    </div>
  );
}

export default App;
