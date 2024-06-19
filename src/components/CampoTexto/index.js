import styled from "styled-components";
import { Botao } from "../Botao";

const Container = styled.div`
    width:100%;
    padding: 1rem 0;
    display:flex;
`

const Campo = styled.input`
    width: 80%;
    padding:1rem;
    border: none;
    background-color: #F2F2F2;
    border-radius: 20px 0 0 20px;
    font-size: 1rem;
    outline: none;
`

const CampoTexto = ()=> {
    return(
        <Container>
            <Campo placeholder="Digite seu produto aqui..."/>
            <Botao>+</Botao>
        </Container>
    )
}

export default CampoTexto;