import { useState , useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Account from './Components/Account/account'
import Footer from './Components/Footer/footer'
import Header from './Components/Header/header'
import Home from './Components/Home/home'
import Services from './Components/Services/services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='' >
      <Header />
      <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account' element={<Account />} />
        {/* <Route path='/services' element={<Services />} /> */}
        </Routes> 
        </main>
      </div>
      <Footer/>
    </>
  )
}

export default App