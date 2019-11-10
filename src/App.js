import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Weclome from './component/Weclome';
import AddressList from './component/AddressList';
import CreateApartment from './component/CreateApartment';
import Edit from './component/Edit';
import Logo from './img/logo.png';

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <Link to="/">
          <img src={Logo} className="image" alt="Logo"/>
        </Link>
        <Route exact path="/" component={Weclome} />
        <Route exact path="/addressList" component={AddressList} />
        <Route exact path="/create" component={CreateApartment} />
        <Route exact path="/edit/:id" component={Edit} />
      </header>
    </Router>
  );
}

export default App;
