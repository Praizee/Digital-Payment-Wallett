import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AppProvider } from './Context/AppContext'; // Import AppProvider

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider> {/* Wrap your entire app with AppProvider */}
      <App />
    </AppProvider>
  </React.StrictMode>,
)
