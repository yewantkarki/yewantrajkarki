import React from 'react'
import { Home } from './Home'
import { Page } from './Page'
import Certificate from './components/certificates/Certificate'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom' 
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="*" exact element={<Page/>}/>
        <Route path="/Certificate" exact element={<Certificate/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App