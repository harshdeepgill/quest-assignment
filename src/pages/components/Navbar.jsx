import styled from "styled-components";
import { TbPentagonFilled } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { BsFillBagHeartFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi2";

function Navbar({setPage, page}) {

    return ( 
        <DIV page={page}>
            <div onClick={()=>{setPage("notification")}}>
                <div page={page}></div>
                <i>
                    <TbPentagonFilled />
                </i>
            </div>
            <div onClick={()=>{setPage("search")}}>
                <div></div>
                <i>
                    <CiSearch />
                </i>
            </div>
            <div onClick={()=>{setPage("wishlist")}}>
                <div></div>
                <i>
                    <BsFillBagHeartFill />
                </i>
            </div>
            <div onClick={()=>{setPage("user")}}> 
                <div></div>
                <i>
                    <HiUser />
                </i>
            </div>
        </DIV>
     );
}

export default Navbar;

const DIV = styled.div`
    height: 4rem;
    display: flex;
    justify-content: space-around;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &>div{
        font-size: 1.5rem;
        color: #616D7E;

        &>div{
            height: 5px;
            width: 1rem;
            margin: 0 auto;
            background-color: #333333;
            border-radius: 0 0 3px 3px;
        }
        &>i{
            height: calc(4rem - 5px);
            display: flex;
            align-items: center;
        }
    }

    &>div:nth-child(1){
        &>div{
            visibility: ${props => props.page != "notification" ? "hidden": "visible"};
        }
        &>i{
            color: ${props => props.page =="notification" && "#333333"};
        }
    }
    &>div:nth-child(2){
        &>div{
            visibility: ${props => props.page != "search" ? "hidden": "visible"};
        }
        &>i{
            color: ${props => props.page =="search" && "#333333"};
        }
    }
    &>div:nth-child(3){
        &>div{
            visibility: ${props => props.page != "wishlist" ? "hidden": "visible"};
        }
        &>i{
            color: ${props => props.page =="wishlist" && "#333333"};
        }
    }
    &>div:nth-child(4){
        &>div{
            visibility: ${props => props.page != "user" ? "hidden": "visible"};
        }
        &>i{
            color: ${props => props.page =="user" && "#333333"};
        }
    }
`
