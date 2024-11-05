import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import { getArticleById } from '../../api'
import { getCommentsById } from '../../api'



export default function SingleArticle(){
    
    const {article_id} = useParams()
    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [comments, setComments] = useState([])
    const [showComments, setShowComments] = useState(false)

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

     function handleClick(event) {
        event.preventDefault();
        if (!showComments) {
           
            getCommentsById(article_id).then((fetchedComments) => {
                setComments(fetchedComments || []);
                setShowComments(true);
            });
        } else {
            setShowComments(false);
        }
    }
    return (
        <div key={article.article_id}>
            <div id="singleArticle">
                <p className="articleItem"><strong>Title: </strong> {article.title}</p>
                <p className="articleItem"><strong>Author: </strong> {article.author}</p>
                <p className="articleItem"><strong>Topic: </strong> {article.topic}</p>
                <p className="articleItem"><strong>Article: </strong> {article.body}</p>
                <img src={article.article_img_url} alt="Article image" className="articleImg" />
                <p className="articleItem"><strong>Votes: </strong> {article.votes}</p>
                <p className="articleItem"><small>Posted on </small> {formatDate(dateString)}</p>
                <p><strong>Comments:</strong> {article.comment_count}</p>
                <button className="button" onClick={handleClick}>{showComments ? "Hide Comments" : "View Comments"}</button>
    
                {showComments && (
                    <div id="commentsSection">
                        <div className="commentsContainer">
                            {comments.length > 0 ? (
                                comments.map((comment) => (
                                    <div key={comment.comment_id} className="comment">
                                        <p><strong>{comment.author}</strong> says:</p>
                                        <p>{comment.body}</p>
                                        <p><strong>Votes:</strong> {comment.votes}</p>
                                        <p><small>Posted on {formatDate(comment.created_at)}</small></p>
                                    </div>
                                ))
                            ) : (
                                <p>No comments to display.</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )};