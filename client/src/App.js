
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Components
import Home from './components/Home'
import NavbarPortfolio from './components/NavbarPortfolio'



const App = () => {

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <NavbarPortfolio />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
