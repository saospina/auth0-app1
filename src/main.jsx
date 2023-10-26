import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-eue8jfz2cney8cap.us.auth0.com"
      clientId="u4vu0E3919iZBPbGlNGix3GW3khue6Ii"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/"
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
