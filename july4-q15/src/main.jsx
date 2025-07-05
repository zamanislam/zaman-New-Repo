import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProviderCustom } from './contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProviderCustom>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ThemeProviderCustom>
    </AuthProvider>
  </React.StrictMode>
);
