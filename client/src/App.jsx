import './App.css'
import {Route, Routes} from "react-router-dom"
import IndexPage from './pages/IndexPage'
import ServicesPage from './pages/ServicesPage'
import Layout from './components/Layout'
import About from './pages/About'
import GraduateHub from './pages/GraduateHub'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'


function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path='/' element={<Layout />}>
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/graduatehub' element={<GraduateHub />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
