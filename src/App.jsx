import './App.css'
import Header from "./components/Header"
import Home from "./components/Home"
import ViewArticles from './components/ViewArticles'
import { Route, Routes } from 'react-router-dom'
import SingleArticle from './components/SingleArticle'

function App() {
 

  return (
    <>
    <Header/>
    <Routes>
    <Route path = "/" element={<Home/>}/>
    <Route path = "/articles" element = {<ViewArticles/>}/>
    <Route path = "/articles/:article_id" element={<SingleArticle/>}/>
  </Routes>
    </>
  )
}

export default App

