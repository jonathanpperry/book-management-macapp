import React from 'react';
import HomeScreen from './screens/HomeScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  // Provide the client to your App
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
};

export default App;
