import { Routes, Route, BrowserRouter } from "react-router-dom";

import React from 'react';
import Home from './pages/Home';
import MainComponent from './pages/Main';
import StoreComponent from './pages/Store';
import MemberComponent from './pages/Members';
import TransactionComponent from './pages/Transaction';
import ContactComponent from './pages/Contact';
import OrganizeComponent from './pages/Organize';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> }>
          <Route index element={ <MainComponent/> }/>
          <Route path="store" element={ <StoreComponent/> }>
            <Route path=":nftId" element={ <StoreComponent/> }/>
          </Route>
          <Route path="member" element={ <MemberComponent/> }>
            <Route path=":name" element={ <MemberComponent/> }/>
          </Route>
          <Route path="transaction" element={ <TransactionComponent/> }>
            <Route path=":hash" element={ <TransactionComponent/> }/>
          </Route>
          <Route path="organize" element={ <OrganizeComponent/> }>
            <Route path=":hash" element={ <OrganizeComponent/> }/>
          </Route>
          <Route path="contact" element={ <ContactComponent/> }>
            <Route path=":hash" element={ <ContactComponent/> }/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;