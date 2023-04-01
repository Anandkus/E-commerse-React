import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { AppProvider } from './context/productcontex';
import { FilterContextProvider } from './context/filter_context';
import { CartProvider } from './context/Cart_context';
import { Auth0Provider } from "@auth0/auth0-react";

const domain=process.env.REACT_APP_AUTH_DOMAIN;
const ClientId=process.env.REACT_APP_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
    domain={domain}
    clientId={ClientId}
    authorizationParams={{
      redirect_uri: window.location.origin }}>
<AppProvider>
    <FilterContextProvider>
        <CartProvider>
<App />
</CartProvider>
</FilterContextProvider>
</AppProvider>
    
</Auth0Provider>
);

