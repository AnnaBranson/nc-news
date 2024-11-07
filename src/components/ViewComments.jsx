import { getCommentsById } from "../../api"
import { useState, useEffect, useContext } from "react"
import  formatDate  from "../utils/formatDate"
import DeleteComment from "./DeleteComment"
import UserContext from "../contexts/UserContext"



export default function ViewComments( {article_id}){
    const { user } = useContext(UserContext)
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
    
        function handleDelete(commentId) {
          
          setComments((prevComments) => prevComments.filter((c) => c.comment_id !== commentId));
        }
      

        return (
            <section className="commentList">
              {comments.map((comment) => (
                <section className="individualComments" key={comment.comment_id}>
                  <p><strong>{comment.author}</strong> says:</p>
                  <p>{comment.body}</p>
                  <p><strong>Votes:</strong> {comment.votes}</p>
                  <p><small>Posted on {formatDate(comment.created_at)}</small></p>
                  {comment.author === user.username && <DeleteComment comment_id={comment.comment_id} onDelete={handleDelete} />}
                </section>
              ))}
            </section>
          );


        }
