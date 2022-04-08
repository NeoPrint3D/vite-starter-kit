import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'



const Home = lazy(() => import('./pages/Home'))





function App() {

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
