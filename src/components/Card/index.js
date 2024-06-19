import { IoTrashBinSharp } from "react-icons/io5";
import styled from "styled-components";

const CardBox = styled.div`
    border-radius: 5px;
    border-left: 5px solid ${(props)=> props.corPrimaria};
    background-color: ${(props)=> props.corSecundaria};
    padding: 1rem;
    position: relative;

    .deletar{
        position: absolute;
        top:10px;
        right:10px;

        &:hover{
            color: red;
        }
    }

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
            <IoTrashBinSharp className="deletar" onClick={deletar}/>
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