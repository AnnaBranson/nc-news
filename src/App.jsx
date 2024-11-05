//import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Home from "./components/Home"
import ViewArticles from './components/viewArticles'
import { Route, Routes } from 'react-router-dom'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
    <Route path = "/" element={<Home/>}/>
    <Route path = "/articles" element = {<ViewArticles/>}/>
  </Routes>
    </>
  )
}

export default App


{/* <UserContext.Provider value={{userObject,setUserObject}} >

<Routes>
<Route path='/' element={<Home />}/>
<Route path='/buyItems' element={<BuyItems/>}/>
<Route path='/sellItems' element={<SellItems/>} />
<Route path='/profile' element={<Profile/>} />
<Route path='/basket' element={<Basket/>} />
<Route path='/login' element={<LogIn setUserObject = {setUserObject}/>}/>
<Route path='/items/:item_id' element={<SingleItem/>}/>
<Route path='/createProfile' element={<CreateProfile setUserLoginObject = {setUserObject}/>} />
</Routes>
</UserContext.Provider> */}