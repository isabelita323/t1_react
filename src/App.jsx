import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './features/auth/components/Login'
import { Recuperar } from './features/auth/components/Recuperar'
import { Registro } from './features/auth/components/Registro'
import { Footer } from './features/landing/components/Footer'
import { Header } from './features/landing/components/Header'
import { Main } from './features/landing/components/Main'
import Profile from './features/landing/components/Props'
import Rickandmorty from './Rickandmorty'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productos" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar" element={<Recuperar />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/props" element={<Profile />} />
        <Route path="/rickandmorty" element={<Rickandmorty />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
