import React from 'react'
import { Navbar, Recipe } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home, About, Recipes, Search} from './pages'


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/about' exact Component={About}/>
          <Route path='/recipes' exact Component={Recipes}/>
          <Route path='/search' exact Component={Search}/>
        </Routes>
      </Router>
    </div>
    
  )
}

export default App