import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import './css/pico.violet.min.css'
//import './css/pico.violet.css'
import './css/index.css'
import './css/pico.violet.min.css'

import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
