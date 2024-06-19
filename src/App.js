import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {

  const cores = [
    {
        cor: 'salmão',
        fundo: '#eeb386',
        fonte: '#3c140e'
    },
    {
        cor: 'verde',
        fundo: '#bfd09e',
        fonte: '#364027'
    },
    {
        cor: 'bege',
        fundo: '#ead9aa',
        fonte: '#643623'
    },
    {
        cor: 'vermelho',
        fundo: '#eaa9ac',
        fonte: '#6e2e31'
    }
]

  const [produtos, setProdutos] = useState([]);

  const recebeValor = (produto)=>{
    setProdutos([...produtos, produto]);
  }

  return (
    <div className="App">
        <Header />
        <Formulario cores={cores} valoresCapturados={valor => recebeValor(valor)}/>
    </div>
  );
}

export default App;
