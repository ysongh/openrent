import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Weclome from './component/Weclome';
import AddressList from './component/AddressList';
import Edit from './component/Edit';
import Logo from './img/logo.png';

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <img src={Logo} className="image" alt="Logo"/>
        <Route exact path="/" component={Weclome} />
        <Route exact path="/addressList" component={AddressList} />
        <Route exact path="/edit" component={Edit} />
      </header>
    </Router>
  );
}

export default App;
