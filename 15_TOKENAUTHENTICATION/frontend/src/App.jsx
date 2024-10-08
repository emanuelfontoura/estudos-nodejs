import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login/Login.jsx'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import NotFound from './Helpers/NotFound.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'

function App() {
  return <>
    <Header />
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='login/*' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
    <Footer />
  </>
}
export default App