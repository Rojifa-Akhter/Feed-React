import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import FeedList from './pages/FeedList';
import Register from './auth/Register';
import Login from './auth/Login';


function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<FeedList/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </div>
  )
}

export default App
