import {getArticles} from "../../api"
import {useState, useEffect} from "react"
import { ArticleCard } from "./ArticleCard"

const PAGE_LENGTH = 5

export default function viewArticles(){
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState(0)
 


    useEffect(()=>{
        getArticles()
        .then((articles)=> {setArticles(articles)
            setTotalCount(articles.length)
            setLoading(false)
        })
        .catch((err) => {
            setError(err)
            setLoading(false)
        })
    }, [page])
    if (loading) { 
        return <div>Loading...</div>; } 
    if (error) { 
        return <div>Error: {error.message}</div>; }
    
    const startIndex = page * PAGE_LENGTH; 
    const endIndex = startIndex + PAGE_LENGTH; 
    const paginatedArticles = articles.slice(startIndex, endIndex);


    return <>{paginatedArticles.map((article)=>{return<div key ={article.article_id}> <ArticleCard article= {article}/></div>})}<button onClick={() => setPage((currentPage) => currentPage - 1)} disabled={page === 0} > Previous Page </button> <button onClick={() => setPage((currentPage) => currentPage + 1)} disabled={PAGE_LENGTH * (page + 1) >= totalCount} > Next Page </button>
    </>
}

