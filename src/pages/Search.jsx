import styled from "styled-components";
import Header from "./components/Header";

function Search() {
    return ( 
        <DIV>
            <Header text={"Search"}/>
        </DIV>
     );
}

export default Search;

const DIV = styled.div`
    height: calc(100vh - 4rem);
    width: 100%;
    background-color: #7052FF;
    padding: 1rem 1rem 0 1rem;
`