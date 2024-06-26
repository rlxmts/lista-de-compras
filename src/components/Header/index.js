import styled from "styled-components";

const Cabecalho = styled.header`
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    margin: 1rem 0;
`

const ContainerImg = styled.div`
    background-color: #6eaa4c;
    width: 30px;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    img{
        width:100%;
        display:block;
    }
`

const Titulo = styled.h1`
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    line-height: 1rem;
`

const Header = ()=> {
    return(
        <Cabecalho>
            <ContainerImg>
                <img src="./img/basket.svg" alt="Carrinho de compras"/>
            </ContainerImg>
                <Titulo>Crie sua lista de Compras</Titulo>
            <ContainerImg>
                <a 
                    href="https://github.com/rlxmts/lista-de-compras"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <img src="./img/github.png" alt="Github" />
                </a>
            </ContainerImg>
        </Cabecalho>
    )
}

export default Header;