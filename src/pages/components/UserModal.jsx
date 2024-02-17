import { useState } from "react";
import styled from "styled-components";
import Badges from "./Badges";

function UserModal({setPopBadge, setPopShow}) {
    const [state, setState] = useState("badges");
    return ( 
        <DIV>
            <NAV state={state}>
                <div onClick={()=> {setState("membership")}}>
                    <p>Membership</p>
                </div>
                <div onClick={()=> {setState("badges")}}>
                    <p>Badges</p>
                </div>
                <div onClick={()=> {setState("history")}}>
                    <p>Point History</p>
                </div>
            </NAV>

            {state == "badges" && <Badges setPopShow={setPopShow} setPopBadge={setPopBadge}/>}
            

        </DIV>
     );
}

export default UserModal;

const DIV = styled.div`
    text-align: center;
    margin-top: 1rem;
`

const NAV = styled.div`
    display: flex;
    justify-content: space-between;
    color: #777;

    &>div{
        width: 30%;
        font-size: 0.9rem;
        padding-bottom: 0.6rem;
        cursor: pointer;
    }

    &>div:nth-child(1){
        color: ${props => props.state == "membership" && "#7052FF"};
        border-bottom: ${props => props.state == "membership" && "2px solid #7052FF"};;
    }
    &>div:nth-child(2){
        color: ${props => props.state == "badges" && "#7052FF"};
        border-bottom: ${props => props.state == "badges" && "2px solid #7052FF"};;
    }
    &>div:nth-child(3){
        color: ${props => props.state == "history" && "#7052FF"};
        border-bottom: ${props => props.state == "history" && "2px solid #7052FF"};;
    }
`