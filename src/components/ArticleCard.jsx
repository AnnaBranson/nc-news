import { Link } from "react-router-dom"

export function ArticleCard (props){
    const { article } = props

    const dateString = article.created_at
    const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleDateString(undefined, options)
     }
     
  
    
    return(<section className = "articleCard"> 
    {/* <Link to={`/articles/${article.article_id}`}> */}
    <p>Title: {article.title}</p>
    <p>Author: {article.author}</p>
    <p> Topic: {article.topic}</p>
    <p>Date Posted: {formatDate(dateString)}</p>
    <p>Votes: {article.votes}</p>
    <p>Article: {article.body}</p>
    <p>Comments: {article.comment_count}</p>
    <img src= {article.article_img_url}/>
   {/* </Link> */}
    </section>)
    }

    