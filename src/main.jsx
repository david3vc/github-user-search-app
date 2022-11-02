import React from 'react'
import 'bootstrap'
import ReactDOM from 'react-dom/client'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
library.add(fas, far);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
