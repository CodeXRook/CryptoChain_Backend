import React, { Component } from 'react';

class App extends Component {
    state = { walletInfo: {address: 'fooxv6', balance: 9999 } };

    componentDidMount(){
        fetch();
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