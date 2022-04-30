import React from 'react';
import {QueryClient, QueryClientProvider } from 'react-query';
import Landing from './LadingPage';

import './App.css';

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Landing />
    </div>
    </QueryClientProvider>
  );
}

export default App;
