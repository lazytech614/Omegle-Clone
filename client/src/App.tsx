import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Room from './pages/Room'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/room' element={<Room />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App