
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WagmiConfig, createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Login from './pages/Login';
import Stream from './pages/Stream';
import Community from './pages/Community';
import MintPage from './pages/MintPage';
import Packs2025 from './pages/Packs2025';

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/stream/:year/:filmId" element={<Stream />} />
            <Route path="/community/:year" element={<Community />} />
            <Route path="/mint" element={<MintPage />} />
            <Route path="/packs/2025" element={<Packs2025 />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </WagmiConfig>
  );
}

export default App;
