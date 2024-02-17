import styled, { keyframes } from "styled-components";
import { RxCross2 } from "react-icons/rx";



function Modal({imageUrl, setPopShow}) {
    return ( 
        <SECTION>
            <OVERLAY></OVERLAY>

            <POPUP>
                <div>
                    <div onClick={()=> {setPopShow(false)}}>
                    <i><RxCross2/></i>
                    </div>
                    <div>
                        <img src={imageUrl} alt="badge" />
                    </div>
                    <h4>Badge Unlocked!</h4>
                    <p>🎉Level Up! Earned a shiny new Badge!🎖✨</p>
                </div>
            </POPUP>
        </SECTION>
     );
}

export default Modal;

const SECTION = styled.section`

`
const OVERLAY = styled.div`
    position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgb(0,0,0,0.3);
  backdrop-filter: blur(3px);
  z-index: 2;
`

const popIn = keyframes`
0%{
    transform: scale(0.01);
}
100%{
    transform: scale(1);
}
`

const POPUP = styled.div`
    position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  &>div{
    width: 17rem;
  height: 14rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  background-color: #fff;
  border-radius: 1rem;
  animation: ${popIn} 0.4s ease-out 0.1s;
  animation-fill-mode: backwards;

  &>div:nth-child(1){
    width: 100%;
    display: flex;
    justify-content: flex-end;

    &>i{
        width: 1rem;
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  }
  &>div:nth-child(2){
    width: 4rem;
    height: 4rem;

    &>img{
        width: 100%;
    }
  }

  &>p{
    font-size: 0.7rem;
    color: #7777;
    margin: 0;
  }
  &>h4{
      color: #333333;
      margin: 0;
  }
  }
`

