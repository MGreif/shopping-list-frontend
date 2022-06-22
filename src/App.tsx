import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Router from './Router'
import Layout from './components/Layout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Layout>
        <div >
          <Router />
        </div>
      </Layout>
    </div> 
  )
}

export default App
