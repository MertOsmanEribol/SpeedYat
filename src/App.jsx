import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";


function App() {

  return (
    
  <div className=" back font-['Poppins'] ">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </div>
    
  )
}

export default App
