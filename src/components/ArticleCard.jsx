import { Link } from "react-router-dom"

export function ArticleCard (props){
    const { article } = props

   
     
  
    
    return(<section className = "articleCard"> 
    <Link to = {`/articles/${article.article_id}`}><p className = "articleItem"><strong>Title: </strong> {article.title}</p></Link>
    <p className = "articleItem"><strong>Author: </strong> {article.author}</p>
    <p className = "articleItem"><strong>Topic: </strong> {article.topic}</p>
    <div className= "container"><img src= {article.article_img_url} id= "articleImage"/></div>
    
       </section>)
    

}