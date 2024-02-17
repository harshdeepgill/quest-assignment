import styled from 'styled-components';
import User from './pages/User';
import Navbar from './pages/components/Navbar';
import { useState } from 'react';
import Notification from './pages/Notification';
import Search from './pages/Search';
import Wishlist from './pages/Wishlist';
import Modal from './pages/components/Modal';

function App() {
  const [page, setPage] = useState("user");

  const [popShow, setPopShow] = useState(false);
  const [popBadge, setPopBadge] = useState("");

  return (
    <DIV className="App">

      {page=="user"&& <User setPopShow={setPopShow} setPopBadge={setPopBadge}/>}
      {page=="notification"&& <Notification/>}
      {page=="search"&& <Search/>}
      {page=="wishlist"&& <Wishlist/>}
      
      <Navbar setPage={setPage} page={page}/>

      {popShow && <Modal imageUrl={popBadge} setPopShow={setPopShow}/>}
    </DIV>
  );
}

export default App;

const DIV = styled.div`
  height: 100vh;
  max-width: 412px;
  margin: 0 auto;
  position: relative;
`
