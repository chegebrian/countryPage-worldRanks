
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import WorldRanksLayout from './WorldRanksLayout'
import CountryRanking from './pages/CountryRanking'

import './App.css'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WorldRanksLayout />}>
          <Route index element={<Navigate replace to="worldRanks" />} />
          <Route path='worldRanks' element={<CountryRanking />} />
          {/* <Route path='info'/> */}
        </Route>
        <Route path='*' element={<p>path not found</p>} />
      </Routes>
    </BrowserRouter>
 
  )
}

export default App
