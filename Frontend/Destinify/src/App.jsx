import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <AppRoutes />
    </>
  )
}

export default App
