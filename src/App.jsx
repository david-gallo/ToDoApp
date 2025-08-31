
import './styles/App.css'
import NavBar from './components/NavBar.jsx'
import SectionTask from './components/SectionTask.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<SectionTask/>}/>
          <Route path="/horarios" element={<h2>Horarios</h2>} />
          <Route path="/notas" element={<h2>Notas</h2>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
