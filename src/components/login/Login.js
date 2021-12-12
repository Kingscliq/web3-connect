import React from 'react';
import './login.css';
const Login = ({ login }) => {
  const [loading, setLoading] = React.useState(false);
  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      window.alert('Ooops! No Ethereum Browser Detected');
    }

    return provider;
  };

  const loginHandler = async () => {
    setLoading(true);
    const provider = detectProvider();
    if (provider) {
      if (provider !== window.ethereum) {
        console.error(
          'Provider is invalid, Do you have multiple registered Wallet'
        );
      }

      await provider.request({
        method: 'eth_requestAccounts',
      });
      login(provider);
    }

    setLoading(false);
  };
  return (
    <>
      <div className="home-wrapper">
        <div className="card">
          <button className="btn btn-primary" onClick={() => loginHandler()}>
            {loading ? 'Connecting...' : 'Connect'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
