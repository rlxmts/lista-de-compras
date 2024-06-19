import styled from "styled-components";
import { keyframes } from 'styled-components';

const BannerBox = styled.div`
    background: rgb(109,172,74);
    background: linear-gradient(146deg, rgba(109,172,74,1) 35%, rgba(145,191,115,0.6839110644257703) 100%);
    height: 300px;
    margin: 1rem 0;
    border-radius: 20px;
    padding: 1.5rem;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`
const Titulo = styled.h2`
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    line-height: 1rem;
    color: #FFF;
`
const Paragrafo = styled.p`
    font-family: "Poppins", sans-serif;
    color: #FFF;
    font-size: .9rem;
`
const rodar = keyframes`
    from {
    transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
const Imagem = styled.img`
    width: 100px;
    margin: 0 auto;
    animation: ${rodar} 20s linear infinite;
`

const Banner = ()=> {
    return(
        <BannerBox>
            <Titulo>#MercadoSemDrama!</Titulo>
            <Imagem src="./img/prato.webp" alt="Prato de comida colorido."/>
            <Paragrafo>Nosso app garante que você nunca mais esqueça itens ao fazer suas compras. Simples e eficiente!</Paragrafo>
        </BannerBox>
    )
}   

export default Banner;

