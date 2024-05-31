import './App.css'
import {Route, Routes} from "react-router-dom"
import IndexPage from './pages/IndexPage'
import ServicesPage from './pages/ServicesPage'
import Layout from './Layout'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='/services' element={<ServicesPage />} />
      </Route>
    </Routes>
  )
}

export default App
