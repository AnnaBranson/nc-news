import { deleteCommentByCommentId } from "../../api";
import { useState } from "react"

export default function DeleteComment ({ comment_id, onDelete}){
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')

    function handleDelete(){
        setLoading(true)
        deleteCommentByCommentId(comment_id)
        .then(()=>{
            setSuccessMessage("Comment Successfully Deleted")
            setTimeout(()=>{
                setSuccessMessage("")
                setLoading(false)
                onDelete(comment_id)
            }, 3000)
        })
        .catch((err) => {
            setError(err)
            setLoading(false)
        })
    }
    return (
        <section>
            <button className="button" onClick= {handleDelete} disabled={loading} >{loading ? "Deleting..." : "Delete"}</button>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
        </section>
    )
}