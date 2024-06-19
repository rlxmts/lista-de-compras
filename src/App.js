import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {

  const cores = [
    {
      cor: 'Mercearia em geral',
      fundo: '#e6e4f1',
      fonte: '#54456d'
    },
    {
      cor: 'Padaria',
      fundo: '#ead875',
      fonte: '#cfba5f'
    },
    {
      cor: 'Bebidas',
      fundo: '#d1e8f3',
      fonte: '#1f465b'
    },
    {
        cor: 'Guloseimas',
        fundo: '#eeb386',
        fonte: '#3c140e'
    },
    {
        cor: 'Naturais',
        fundo: '#bfd09e',
        fonte: '#364027'
    },
    {
        cor: 'Laticínios',
        fundo: '#ead9aa',
        fonte: '#643623'
    },
    {
        cor: 'Carnes',
        fundo: '#eaa9ac',
        fonte: '#6e2e31'
    },
    {
      cor: 'Limpeza',
      fundo: '#d2f3d6',
      fonte: '#1c4b24'
    },
    {
      cor: 'Higiene',
      fundo: '#add99c',
      fonte: '#14250e'
    },
    {
      cor: 'Pet',
      fundo: '#fee5f8',
      fonte: '#550232'
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
    </div>
  );
}

export default App;
