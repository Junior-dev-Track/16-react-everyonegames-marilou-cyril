import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from './component/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>,
)
