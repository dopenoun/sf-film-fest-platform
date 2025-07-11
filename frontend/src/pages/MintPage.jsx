
import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from '@wagmi/connectors';

function MintPage() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  const handleMint = async () => {
    const response = await fetch('/mint', { method: 'POST' });
    const data = await response.json();
    alert(data.message);
  };

  if (isConnected) {
    return (
      <div>
        <p>Connected with {address}</p>
        <button onClick={() => disconnect()}>Disconnect</button>
        <button onClick={handleMint}>Mint NFT Pass</button>
      </div>
    );
  }

  return <button onClick={() => connect()}>Connect Wallet</button>;
}

export default MintPage;
