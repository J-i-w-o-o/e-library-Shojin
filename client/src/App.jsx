import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Authentication } from './pages/auth/Auth'
import { AuthProvider } from '../context/AuthContext'
import './App.css'
import { Home } from './pages/home/Home'
import VerificationCodeInput from './pages/auth/Verification'
import Form from './pages/home/form-sample'
import PersistLogin from './components/PersistLogin'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/auth" element={<Authentication />}/>
          <Route element={<PersistLogin />}>
            <Route path='/' element={<Home /> } />
            <Route path='/verify/:email' element={<VerificationCodeInput />}/>
            <Route path='/form' element={<Form />}/>
            <Route />
            <Route />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
