import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import PizzaProvider from './contexts/PizzaContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <PizzaProvider>
        <App />
      </PizzaProvider>
    </Router>
  </React.StrictMode>
)
