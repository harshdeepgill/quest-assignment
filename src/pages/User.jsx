import styled from "styled-components";
import Header from "./components/Header";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import UserModal from "./components/UserModal";
import { fetcher } from "../controller/controller";

const headers = {
    "userid": "u-a2399489-9cd0-4c94-ad12-568379202b08",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc",
    "apikey": "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
    "entityId": "e-0000000000"
  }

function User({setPopBadge, setPopShow}) {

    const dispatch = useDispatch();
    
    const {isLoading, isError, name, imageUrl, points, level, rank} = useSelector((store) => {
        return {
            isLoading: store.isLoading,
            isError: store.isError,
            name: store.name,
            imageUrl: store.imageUrl,
            points: store.points,
            level: store.level,
            rank: store.rank
        }
    })


    

    useEffect(() => {
        fetcher("https://staging.questprotocol.xyz/api/users/u-a2399489-9cd0-4c94-ad12-568379202b08", "REQUEST", dispatch)
        .then((res) => {
            console.log(res.data)
            dispatch({type: "USER_INFO_SUCCESS", payload: res.data.data});
        })
        .catch((err) => {
            dispatch({type:"ERROR"});
        })

        fetcher("https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp", "REQUEST", dispatch)
        .then((res) => {
            dispatch({type: "USER_DATA_SUCCESS", payload: res.data});
        })
        .catch((err) => {
            dispatch({type: "ERROR"});
        })

    }, [])

    console.log(imageUrl, name)
    return ( 
        <DIV>
            <Header text={"Profile"}/>

            <Main>
                <DP>
                    <img src={imageUrl} alt={"Profile Picture"} />
                </DP>

                
                <h2>{name}</h2>

                <CARDDIV>
                    <Card title={"Points"} val={points}/>
                    <Card title={"Rank"} val={`#${rank}`}/>
                    <Card title={"Level"} val={level}/>
                </CARDDIV>
                
                <UserModal setPopShow={setPopShow} setPopBadge={setPopBadge}/>
            </Main>


        </DIV>
     );
}

export default User;

const DIV = styled.div`
    height: calc(100vh - 4rem);
    width: 100%;
    background-color: #7052FF;
    padding: 1rem 1rem 0 1rem;
`
const Main = styled.div`
    position: relative;
    background-color: #fff;
    margin-top: 7rem;
    width: 100%;
    height: calc(100vh - 14.5rem);
    text-align: center;
    padding-top: 4.7rem;

    &>h2{
        color: #333333;
    }
`
 const DP = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -115%);
    border-radius: 50%;
    border: 4px solid white;
    width: 7.5rem;
    height: 7.5rem;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &>img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

 `

 const CARDDIV = styled.div`
    display: flex;
    justify-content: space-around;
 `

