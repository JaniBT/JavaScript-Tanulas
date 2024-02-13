import { useState } from 'react'
import './App.css'
import './link_button.jsx'
import Link_button from "./link_button.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <h1 className="focim">Első React Appom</h1>
        </div>
      <div className="flexbox">
          <Link_button />
      </div>
    </>
  )
}

export default App
