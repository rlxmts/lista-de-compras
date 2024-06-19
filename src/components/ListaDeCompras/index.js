import styled from "styled-components";
import Card from "../Card";

const ListaBox = styled.ul`
    display:flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    transition:1s;
`

const ListaDeCompras = ({produto})=> {

    return(
        <section>
            <ListaBox>
                {produto.map( produto => 
                <Card 
                    key={produto.produto}
                    nome={produto.produto}  
                    categoria={produto.nome}
                    corPrimaria={produto.cores.corPrimaria}
                    corSecundaria={produto.cores.corSecundaria}
                />
                )}
            </ListaBox>
        </section>
    )
}

export default ListaDeCompras;