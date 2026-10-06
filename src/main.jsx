import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

const rootEl = document.getElementById('root')

if (rootEl.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootEl, <App />)   // prerendered page
} else {
  ReactDOM.createRoot(rootEl).render(<App />)   // dev server / app-shell
}
 