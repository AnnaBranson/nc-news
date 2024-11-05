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
    <p className = "articleItem"><strong>Title: </strong> {article.title}</p>
    <p className = "articleItem"><strong>Author: </strong> {article.author}</p>
    <p className = "articleItem"><strong>Topic: </strong> {article.topic}</p>
    {/* <p className = "articleItem"><strong>Date Posted:</strong> {formatDate(dateString)}</p>
    <p className = "articleItem"><strong>Votes:</strong> {article.votes}</p>
    <p><strong>Article:</strong>  {article.body}</p>
    <p><strong>Comments:</strong>  {article.comment_count}</p> */}
    <div className= "container"><img src= {article.article_img_url} id= "articleImage"/></div>
    
   {/* </Link> */}
    </section>)
    }

    