import React, { Component } from 'react';

class App extends Component {
    state = { walletInfo: {address: 'fooxv6', balance: 9999 } };

    componentDidMount(){
        fetch('http://localhost:3000/api/wallet-info');
    }

  render() {
      const {address, balance } = this.state.walletInfo;
      return (
      <div>
          <div>
          Welcome to BlockChain, Lets make Crypto
          </div>
            <di>Address: {address}</di>
            <div>Balance: {balance}</div>
          </div>
      );
  }
}

export default App;