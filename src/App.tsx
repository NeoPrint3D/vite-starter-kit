import { domMax, LazyMotion } from 'framer-motion'
import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'


const About = lazy(() => import('./pages/About'))



function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyMotion features={domMax}>
        <div className='min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-red-400 '>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

      </LazyMotion>
    </Suspense>
  )
}

export default App
