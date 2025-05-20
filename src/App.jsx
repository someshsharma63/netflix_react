import { useState } from 'react'
import './App.css'
import Banner from './assets/Components/Banner'
import Header from './assets/Components/Header'
// import MovieList from './assets/Components/Movielist'
import MovieList from './assets/Components/Movielist'

function App() {


  return (
    <>
      <Header/>
       <Banner />
       <MovieList/>
      
    </>
  )
}

export default App
