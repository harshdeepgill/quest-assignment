import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

function Header({text}) {
    return ( 
        <Head>
                <div>
                    <IoIosArrowBack/>
                </div>
                <div>
                    <h3>{text}</h3>
                </div>
                <div></div>
        </Head>
     );
};

export default Header;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    &>div:nth-child(1){
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 8px;
        backdrop-filter: blur(8px);
        background-color: rgb(256,256,256,0.1);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &>div:nth-child(3){
        width: 2.5rem;
        height: 2.5rem;
    }
`