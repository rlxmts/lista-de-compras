import styled from "styled-components";
import { Botao } from "../Botao";
import { CampoTexto } from "../CampoTexto";
import ListaDeCores from "../ListaDeCores";
import { useState } from "react";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
`

const Formulario = ({cores, valoresCapturados})=> {   
    
    const [produto, setProduto] = useState('');
    const [cor, setCor] = useState('salmão');

    const capturarCampos = (e)=> {
        e.preventDefault();
        valoresCapturados(
            {
                produto,
                cor
            }
        )
    }

    return(
        <Form onSubmit={ capturarCampos }>
            <CampoTexto 
                placeholder="Digite seu produto aqui..." 
                required
                onChange={(e) => setProduto(e.target.value)}
            />            
            <ListaDeCores 
                obrigatorio={true} 
                cores={cores} 
                aoEscolher={valor => setCor(valor)}
            />
            <Botao>Cadastrar Produto</Botao>
        </Form>
    )
}

export default Formulario;