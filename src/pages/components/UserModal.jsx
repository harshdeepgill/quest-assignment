import { useState } from "react";
import styled from "styled-components";

function UserModal() {
    const [state, setState] = useState("badges");
    return ( 
        <DIV>
            <NAV>
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
    }
`