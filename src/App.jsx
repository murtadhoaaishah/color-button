import { useState } from 'react'
import './App.css'

function App() {
  const [backgroundColor, setbackgroundColor] = useState('#761187')

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      background: backgroundColor,
    }}>


      <button style={{ width: "10rem", height: "10rem", backgroundColor: "#871111", display: "block", marginLeft: "3rem" }} onClick={() => setbackgroundColor("#871111")}>  </button>


      <button style={{ width: "10rem", height: "10rem", backgroundColor: "#5A6628", display: "block", marginLeft: "3rem" }} onClick={() => setbackgroundColor("#5A6628")}> </button>
      <button style={{ width: "10rem", height: "10rem", backgroundColor: "#113287", display: "block", marginLeft: "3rem" }} onClick={() => setbackgroundColor("#113287")}> </button>

      <button style={{ width: "10rem", height: "10rem", backgroundColor: "#761187", display: "block", marginLeft: "3rem" }} onClick={() => setbackgroundColor("#761187")}> </button>
    </div >
  )
}

export default App
