import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import IfelseCond from './IfelseCond'
import Ternary from './Ternary'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <IfelseCond></IfelseCond> */}
  <Ternary></Ternary>
  </StrictMode>,
)
