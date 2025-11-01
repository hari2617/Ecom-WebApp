import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


const App = () => {

    const theme=useSelector((state)=>state.theme)
  
  return (
    <div data-theme={theme}>
    <Header/>
    <main className='min-h-lvh' >
       <div className="container max-w-6xl mx-auto">
        <Outlet/>
       </div>
     </main>
    <Footer/>
   
    </div>
  )
}

export default App