import logo from './logo.svg';
import './App.scss';
//importing the necessary Routes to route between components
import { Routes, Route } from 'react-router-dom'
//importing components folder
import Layout from './components/Layout'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
function App() {
  return (
    <>
    <Routes>
      <Route path= "/" element ={<Layout />}>
        <Route index element ={<Home />} />
        <Route path = "about" element ={<About />} />
        <Route path= "contact" element={<Contact />} />
      </Route>
      </Routes>
    </>
  )
}

export default App;
