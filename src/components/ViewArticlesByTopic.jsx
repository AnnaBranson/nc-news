import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getArticlesByTopic } from "../../api"; 


export default function ViewArticlesByTopic() {
  const { topic_slug } = useParams()
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    
    setLoading(true);
   
    getArticlesByTopic(topic_slug)
      .then((articles) => {
        
        setArticles(articles);
        setLoading(false);
      })
      .catch((err) => {
        
        setError(err);
        setLoading(false);
      });
  }, [topic_slug]); 

 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Articles on {topic_slug}</h1>


      

      {articles.map((article) => (
        <div className="article" key = {article.article_id}>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
        </div>
      ))}
    </div>
  );
}