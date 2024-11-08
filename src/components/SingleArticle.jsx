import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import { getArticleById, postCommentByArticleId, patchVotesByArticleId } from '../../api'
import  ViewComments  from "./ViewComments"
import  formatDate  from "../utils/formatDate"
import AddComment from "./AddComment"


export default function SingleArticle(){
    
    const {article_id} = useParams()
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [body, setBody] = useState("")
    const [showComments, setShowComments] = useState(false)
    const [votes, setVotes] = useState(0)
    const [showForm, setShowForm] = useState(false)
    const [author, setAuthor] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

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
   
     if (loading) { return <div>Loading...</div>; } 
     if (error) { return <div>Error: {error.message}</div>; }

  
    function patchVote(event) {
        event.preventDefault();
        const newVotes = votes +1
        setVotes(newVotes)
        patchVotesByArticleId(article_id)
            .then((updatedArticle) => {
                setVotes(updatedArticle.votes)
                setArticle((prevArticle) => ({
                    ...prevArticle,
                    votes: prevArticle.votes + 1, 
                }));
            })
            .catch((err) => {
                setError(err); 
            });
    }
    
    function handleAddComment({ author, body }) {
        const newComment = { author, body, create_at: new Date().toISOString()}

        setArticle((prevArticle) => ({
            ...prevArticle,
            comment_count: Number(prevArticle.comment_count) + 1, 
            
        }));
        
        postCommentByArticleId(article_id, author, body)
          .then ((response) => {
            setShowForm(false)
            setShowComments(true)
            setSuccessMessage("Comment successfully posted!") 
            setTimeout(() => setSuccessMessage(""), 3000)
            return response
          })
          .catch((err) => {
              
              setArticle((prevArticle) => ({
                  ...prevArticle, 
                  comment_count: Number(prevArticle.comment_count)-1,
                  comments: prevArticle.comments.filter((comment) => comment !== newComment) 
                }))
                setError(err);
            });
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
                <button className="button" onClick={patchVote}>Vote!</button>
                <p className="articleItem"><small>Posted on </small> {formatDate(dateString)}</p>
                <p><strong>Comments:</strong> {article.comment_count}</p>
                <button className="button" onClick={() => setShowComments(!showComments)}>
                    {showComments ? "Hide Comments" : "View Comments"}
                </button>
               
                 <button className="button" onClick={() => setShowForm(!showForm)}>
                Have your say
                    </button>
                    {showForm && (
                    <AddComment
                        author={author}
                        setAuthor={setAuthor}
                        body={body}
                        setBody={setBody}
                        onSubmit={handleAddComment}
                     />
                     )}

                    {successMessage && (
                    <p style={{ color: 'green' }}>{successMessage}</p>  // Display the success message
                )}
                {showComments && <ViewComments article_id={article_id} />}
            </div>
        </div>
    );};