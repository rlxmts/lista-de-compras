import styled from "styled-components";

const CardBox = styled.div`
    border-radius: 5px;
    border-left: 5px solid ${(props)=> props.corPrimaria};
    background-color: ${(props)=> props.corSecundaria};
    padding: 1rem;
    position: relative;

    h5,span{
    color: ${(props)=> props.corPrimaria};
    font-family: "poppins", sans-serif;
    }

    h5{
        font-size: 1.3rem;
    }
    span{
        font-size: 1rem;
    }
`

const Card = ({corPrimaria, corSecundaria, nome, categoria})=> {
    return(
        <CardBox 
            corPrimaria={corPrimaria}
            corSecundaria={corSecundaria}
        >
            <h5 corPrimaria={corPrimaria}>
                {nome}
            </h5>
            <span corPrimaria={corPrimaria}>
                {categoria}
            </span>
        </CardBox>
    )
}

export default Card;