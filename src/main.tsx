import React from 'react'
import ReactDOM from 'react-dom/client'
import MyComponent from './App.tsx'
import './index.css'
import BasicExample from './components/NaviBar.tsx'
import BreadCrumbs from './components/BreadCrumbs.tsx'
import { 
  BrowserRouter as Router,
  Route,
  Routes,
   } from 'react-router-dom'
import ExpertiseCard1 from './components/ExpertiseCard1.tsx'
import ExpertiseCard2 from './components/ExpertiseCard2.tsx'
import ExpertiseCard3 from './components/ExpertiseCard3.tsx'
import ExpertiseCard4 from './components/ExpertiseCard4.tsx'
import ExpertiseCard5 from './components/ExpertiseCard5.tsx'
import ExpertiseCard6 from './components/ExpertiseCard6.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
    <BasicExample />
    <BreadCrumbs />
    <Routes>
      <Route path="/" Component={MyComponent}/>
      <Route path="/expertise/1" Component={ExpertiseCard1}/>
      <Route path="/expertise/2" Component={ExpertiseCard2}/>
      <Route path="/expertise/3" Component={ExpertiseCard3}/>
      <Route path="/expertise/4" Component={ExpertiseCard4}/>
      <Route path="/expertise/5" Component={ExpertiseCard5}/>
      <Route path="/expertise/6" Component={ExpertiseCard6}/>
    </Routes>
    </Router>
  </React.StrictMode>,
)
