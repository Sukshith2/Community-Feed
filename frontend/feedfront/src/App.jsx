import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Feed from './components/Feed'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <h1 className="text-xl font-bold text-center mt-4">
        Community Feed
      </h1>
      <Feed/>
   </div>
  )
}

export default App
