import {getCommentsById} from "../../api"
import {useState, useEffect} from "react"
import  formatDate  from "../utils/formatDate"



export default function ViewComments( {article_id}){
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null)
  
        useEffect(()=>{
        getCommentsById(article_id)
        .then((fetchedComments)=> {
            setComments(fetchedComments)
            setLoading(false)
        })
        .catch((err) => {
            setError(err)
            setLoading(false)
        })
    }, [article_id])
    if (loading) { 
        return <div>Loading...</div>; } 
    if (error) { 
        return <div>Error: {error.message}</div>; }
    



        return (
            <section className="commentList">
              {comments.map((comment) => (
                <section className="individualComments" key={comment.comment_id}>
                  <p><strong>{comment.author}</strong> says:</p>
                  <p>{comment.body}</p>
                  <p><strong>Votes:</strong> {comment.votes}</p>
                  <p><small>Posted on {formatDate(comment.created_at)}</small></p>
                </section>
              ))}
            </section>
          );


        }
