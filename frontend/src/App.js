import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <Header/>
    <main className='py-3'>
      <Container />
       <Outlet/>
        </main>
        <Footer />
    </>
  )
}

export default App