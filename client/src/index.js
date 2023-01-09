import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import './fonts/sysfont.woff'

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'mdbreact/dist/css/mdb.css'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import App from './App'

createRoot(document.getElementById('root')).render(<App />)