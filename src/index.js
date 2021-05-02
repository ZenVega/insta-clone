import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase'
import { firebase, FieldValue } from './lib/firebase'
import './styles/app.css'


ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase, FieldValue}}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// client side rendered app: react (cra)
  // -> database which is Firebase
  // react-loading-skeleton
  // tailwind

// architecture
  //src ->
    //-> components, 
    //-> constants, 
    //-> context, 
    //-> helpers, 
    //-> hooks, 
    //-> lib(firebase lives in here), 
    //-> services (firebase functions)
    //-> styles (tailwind's folder (/app/tailwind))