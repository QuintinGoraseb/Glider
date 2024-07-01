import './App.css'
import {Route, Routes} from "react-router-dom"
import IndexPage from './pages/IndexPage'
import Services from './pages/Services'
import Layout from './components/Layout'
import About from './pages/About'
import BTools from './pages/BTools'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import TermsPage from './pages/TermsPage'
import PolicyPage from './pages/PolicyPage'
import Disclaimer from './pages/Disclaimer'
import Error from './pages/Error'
import GDPR from './pages/GDPR'
import Cookies from './pages/Cookies'


function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path='/home' element={<IndexPage />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/btools' element={<BTools />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/terms' element={<TermsPage />} />
      <Route path='/privacy' element={<PolicyPage />} />
      <Route path='/disclaimer' element={<Disclaimer />} />
      <Route path='/error' element={<Error />} />
      <Route path='/gdpr' element={<GDPR />} />
      <Route path='/cookies' element={<Cookies />} />
      <Route path='/' element={<Layout />}></Route>
    </Routes>
  )
}

export default App
