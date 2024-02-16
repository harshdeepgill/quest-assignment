import styled from "styled-components";
import { TbPentagonFilled } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { BsFillBagHeartFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi2";

function Navbar() {
    return ( 
        <DIV>
            <i>
                <TbPentagonFilled />
            </i>
            <i>
                <CiSearch />
            </i>
            <i>
                <BsFillBagHeartFill />
            </i>
            <i>
                <HiUser />
            </i>
        </DIV>
     );
}

export default Navbar;

const DIV = styled.div`
    height: 4rem;
    display: flex;
    justify-content: space-around;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &>i{
        font-size: 2rem;
        display: flex;
        align-items: center;
        color: #616D7E;
    }
`