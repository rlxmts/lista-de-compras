import styled from "styled-components";

const Select = styled.select`
    width:100%;
    padding: .5rem;
    border: 1px solid #f2f2f2;
    outline:none;
`

const ListaDeCores = ({obrigatorio, cores, aoEscolher})=> {    
    return(
        <Select required={obrigatorio} onChange={(e) => aoEscolher(e.target.value)}>
            {cores.map( cor => <option key={cor.cor}>{cor.cor}</option>)}
        </Select>
    )
}

export default ListaDeCores;