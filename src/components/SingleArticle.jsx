import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import { getArticleById } from '../../api'



export default function SingleArticle(){
    
    const {article_id} = useParams()
    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        getArticleById(article_id)
        .then((article)=>{
            setArticle(article)
            setLoading(false)
        })
        .catch((err)=>{
            setError(err); setLoading(false)
         
        })
    },[article_id])



    const dateString = article.created_at
    const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleDateString(undefined, options)
     }
     if (loading) { return <div>Loading...</div>; } 
     if (error) { return <div>Error: {error.message}</div>; }

    return( <div key ={article.article_id}> 
    <div id= "singleArticle">
    <p className = "articleItem"><strong>Title: </strong> {article.title}</p><div className= "container"><img src= {article.article_img_url} id= "articleImage"/></div>
    <p className = "articleItem"><strong>Author: </strong> {article.author}</p>
    <p className = "articleItem"><strong>Topic: </strong> {article.topic}</p>
    
    <p className = "articleItem"><strong>Date Posted:</strong> {formatDate(dateString)}</p>
    <div id = "voteButton">
    <p className = "articleItem"><strong>Votes:</strong> {article.votes}</p><button className = "button"  > Vote! </button>
    </div>
    <p><strong>Article:</strong>  {article.body}</p>
    <p><strong>Comments:</strong>  {article.comment_count}</p>
    </div>
    </div>
    )
}