import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Login from './components/login/Login';
import { useState } from 'react';
import Web3 from 'web3';
function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [activeAccount, setActiveAccount] = useState(null);

  const onLogin = async provider => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    if (accounts.length === 0) {
      alert(
        'Please Connect To Metamask, U might need to install Metamask Chrome Extension to Run this Application'
      );
    } else {
      setActiveAccount(accounts[0]);
      setIsConnected(true);
    }
  };
  const onLogout = () => {
    setIsConnected(false);
  };
  return (
    <>
      <NavBar
        logout={onLogout}
        activeAccount={activeAccount}
        isConnected={isConnected}
      />
      {isConnected ? (
        <Home
          isConnected={isConnected}
          logout={onLogout}
          activeAccount={activeAccount}
        />
      ) : (
        <Login login={onLogin} logout={onLogout} />
      )}
    </>
  );
}

export default App;
