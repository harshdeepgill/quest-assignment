import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetcher } from "../../controller/controller";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";

function Badges({setPopBadge, setPopShow}) {
    const dispatch = useDispatch();



    const {isLoadingData, isErrorData, badgeData} = useSelector((store) => {
        return {
            isLoadingData: store.isLoadingData,
            isErrorData: store.isErrorData,
            badgeData: store.badgeData
        }
    } )

    useEffect(()=>{
        fetcher("https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/badges", "REQUEST_DATA", dispatch)
        .then((res)=> {
            let arr = [];
            let badges = res.data.data;
            for(let i=0;i<badges.length;i++){
                arr.push(badges[i].imageUrl)
            }
            dispatch({type: "SUCCESS_DATA", payload: arr})
        })
    },[])

    const popFunc = (imageUrl) => {
        setPopBadge(imageUrl);
        setPopShow(true);
    }
    return ( 
        <DIV>
            {badgeData?.map((el, i) => <div key={Math.random() + Date.now + i} onClick={() => {popFunc(el)}} >
                <img src={el} alt="badge" />
            </div>)}

            
        </DIV>
     );
}

export default Badges;

const DIV = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 5.2rem 5.2rem 5.2rem;
    justify-content: space-around;
    row-gap: 0.7rem;
    height: calc(100vh - 31.8rem);
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &>div{
        margin: 0 8px 0 8px;
        cursor: pointer;

        &>img{
            width: 100%;
        }
    }

    &::-webkit-scrollbar{
        display: none;
    }
`