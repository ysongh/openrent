import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Narbar from './component/Navbar';
import Weclome from './component/Weclome';
import QRcode from './component/QRcode';
import AddressList from './component/AddressList';
import CreateApartment from './component/CreateApartment';
import Edit from './component/Edit';

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <Narbar />
        <Route exact path="/" component={Weclome} />
        <Route exact path="/addressList" component={AddressList} />
        <Route exact path="/qr" component={QRcode} />
        <Route exact path="/create" component={CreateApartment} />
        <Route exact path="/edit/:id" component={Edit} />
      </header>
    </Router>
  );
}

export default App;
