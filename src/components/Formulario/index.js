import styled from "styled-components";
import { Botao } from "../Botao";
import { CampoTexto } from "../CampoTexto";
import ListaDeCores from "../ListaDeCores";
import { useState } from "react";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
`

const Formulario = ({cores, valoresCapturados})=> {   
    
    const [produto, setProduto] = useState('');
    const [categoria, setCategoria] = useState('Mercearia em geral');

    const obterCores = (categoria)=> {
        switch(categoria){
            case 'Mercearia em geral':
                return{corSecundaria: '#e6e4f1', corPrimaria: '#54456d'};
            case 'Padaria':
                return{corSecundaria: '#ead875', corPrimaria: '#3d200b'};
            case 'Bebidas':
                return{corSecundaria: '#d1e8f3', corPrimaria: '#1f465b'};
            case 'Guloseimas':
                return{corSecundaria: '#eeb386', corPrimaria: '#3c140e'};
            case 'Naturais':
                return{corSecundaria: '#bfd09e', corPrimaria: '#364027'};
            case 'Laticínios':
                return{corSecundaria: '#ead9aa', corPrimaria: '#643623'};
            case 'Carnes':
                return{corSecundaria: '#eaa9ac', corPrimaria: '#6e2e31'};
            case 'Limpeza':
                return{corSecundaria: '#d2f3d6', corPrimaria: '#1c4b24'};
            case 'Higiene':
                return{corSecundaria: '#add99c', corPrimaria: '#14250e'};
            case 'Pet':
                return{corSecundaria: '#fee5f8', corPrimaria: '#550232'};
            default:
                return { corSecundaria: '#d2f3d6', corPrimaria: '#1c4b24' };
        }
    }

    const capturarCampos = (e)=> {
        e.preventDefault();
        const cores = obterCores(categoria)
        valoresCapturados(
            {
                produto,
                categoria,
                cores
            }
        )

        setProduto('');
    }

    return(
        <Form onSubmit={ capturarCampos }>
            <CampoTexto 
                placeholder="Digite seu produto aqui..." 
                required
                value={produto}
                onChange={(e) => setProduto(e.target.value)}
            />            
            <ListaDeCores 
                obrigatorio={true} 
                cores={cores} 
                aoEscolher={valor => setCategoria(valor)}
            />
            <Botao>Cadastrar Produto</Botao>
        </Form>
    )
}

export default Formulario;