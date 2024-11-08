import './App.css'
import Header from "./components/Header"
import Home from "./components/Home"
import ViewArticles from './components/ViewArticles'
import { Route, Routes } from 'react-router-dom'
import SingleArticle from './components/SingleArticle'
import  UserContext  from "./contexts/UserContext"
import { useState } from "react"
import  ViewTopics  from "./components/ViewTopics"
import  ViewArticlesByTopic  from "./components/ViewArticlesByTopic"

function App() {
 const [user, setUser] = useState([])

  return (
    <>
    <UserContext.Provider value = {{user, setUser}}>
    <Header/>
  <Routes>
    <Route path = "/" element={<Home/>}/>
    <Route path = "/articles" element = {<ViewArticles/>}/>
    <Route path = "/articles/:article_id" element={<SingleArticle/>}/>
    <Route path = "/topics" element={<ViewTopics/>}/>
    <Route path= "/articles/:topic_slug" element={<ViewArticlesByTopic />} />
  </Routes>
  </UserContext.Provider>
    </>
  )
}

export default App

