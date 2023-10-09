
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Landing from './components/landing.jsx';
import SingleInvoice from './components/SingleInvoice.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Landing/>}/>
      <Route path='/single_invoice/:id' element = {<SingleInvoice />}/>
      <Route path='/Landing/' element = {<Landing />}/>
      
    </Routes>
    </BrowserRouter>

  </React.StrictMode>,

)
