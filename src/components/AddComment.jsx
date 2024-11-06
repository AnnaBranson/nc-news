import { useState, useEffect, useContext } from 'react';
import { getUsers } from "../../api"
import  UserContext  from "../contexts/UserContext"

export default function AddComment({ onSubmit }) {
  
  const [body, setBody] = useState('');
  const [users, setUsers] = useState([]);
  const [isAuthorValid, setIsAuthorValid] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const { user } = useContext(UserContext)
  

  const [author, setAuthor] = useState(user ? user.username : '')

  useEffect(() => {
    getUsers()
    .then((response)=> {
        setUsers(response.data.users)
    })
  }, [])


  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true)
    if (isAuthorValid && onSubmit) {
      onSubmit({ author, body });
      setAuthor('');
      setBody('');
     
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="author">Name:</label>
      <input
        type="text"
        id="name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
   
      <br />
      <label htmlFor="body">Comment:</label>
      <textarea
        id="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <br />
      <button type="submit" className="button">Submit Comment</button>
    </form>
  );
}