import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import './Qrcode.css'
// import './Form.css'

import App from './App.jsx'
import { UserCard } from './userCard.jsx'
import { Qrcode } from './Qrcode.jsx'
import { Form } from './Form.jsx'
import { Advice } from './Advice.jsx'
import { UseReducer } from './UseReducer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UserCard/> */}
    {/* <Qrcode/> */}
    {/* <Form/> */}
    {/* <Advice/> */}
    <UseReducer/>
  </StrictMode>,
)
