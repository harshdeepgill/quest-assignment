import styled from "styled-components";

function Card({val, title}) {
    return ( 
        <DIV>
            <p>{val}</p>
            <p>{title}</p>
        </DIV>
     );
}

export default Card;

const DIV = styled.div`
    width: 6rem;
    height: 6rem;
    background-color: #7052FF;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 5px 0;
    margin-top: 1rem;

    &>p:nth-child(1){
        font-size: 1.3rem;
        font-weight: 400;
        margin: 0;
    }
    &>p:nth-child(2){
        font-size: 0.8rem;
        margin: 0;
    }
`