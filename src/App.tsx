import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import FeedList from './pages/FeedList'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<FeedList/>}></Route>
      </Routes>
    </div>
  )
}

export default App
