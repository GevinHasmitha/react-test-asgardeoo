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
      clientID: "spSTnUJiRN51jBOdyDGtMihP49Ia",
      baseUrl: "https://www.facebook.com/",
      scope: [ "openid","profile" ]
  } }
>
<App />
</AuthProvider>
 

);

