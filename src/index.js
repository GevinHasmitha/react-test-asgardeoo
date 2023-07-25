import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { AuthProvider } from "@asgardeo/auth-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider
  config={ {
      signInRedirectURL: "https://kaleidoscopic-arithmetic-206011.netlify.app/",
      signOutRedirectURL: "https://kaleidoscopic-arithmetic-206011.netlify.app/",
      clientID: "B2cN_JjbxA4UYHIUmfFmJR6pxhoa",
      baseUrl: "https://api.asgardeo.io/t/asgardeo123",
      scope: [ "openid","profile","email" ]
  } }
>
<App />
</AuthProvider>
 

);

