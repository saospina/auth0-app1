import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-eue8jfz2cney8cap.us.auth0.com"
      clientId="oT9T1Hr6oFEfm3HasIldXpX6ooCGAdWQ"
      authorizationParams={{
        redirect_uri: "https://saospina.github.io/auth0-app1/"
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
