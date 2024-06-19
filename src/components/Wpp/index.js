import styled from "styled-components";
import {keyframes} from "styled-components";

const pulsar = keyframes`
    0% {
    transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100%{
        transform: scale(1);
    }
`

const Link = styled.a`
    position: fixed;
    bottom: 20px;
    right: 20px;
    animation: ${pulsar} 5s linear infinite;
    width: 50px;

    img{
        width:100%;
    }
`

const Wpp = ()=>{
    return(
        <Link
            href="https://wa.me/5521991537608"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src="./img/wpp.png" alt="WhatsApp" />
        </Link>
    )
}

export default Wpp;