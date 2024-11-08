import axios from "axios"

const api = axios.create({
    baseURL: "https://be-nc-news-yl9m.onrender.com/api/",
  });

  const getArticles = () => {

    return api.get("/articles?order_by=DESC")
    .then(({data}) => {
        return data.articles
    })
    .catch ((err)=> {
        return err
    })
  }

  const getArticleById = (id) =>{
    return api.get(`/articles/${id}`)
    .then(({data}) => {
        return data.article
    })
  }

  const getCommentsById = (id) => {
    return api.get(`/articles/${id}/comments`)
    .then(({data})=> {
        return data.comments
    })
  }

  const patchVotesByArticleId = (article_id) => {
    return api.patch(`/articles/${article_id}`, {inc_vote: 1})
    .then((response)=> {
        return response
    })
  }

  const postCommentByArticleId = (article_id, author, body) => {
    return api.post(`/articles/${article_id}/comments`, {author, body} )
    .then((response) =>{
      
      return response
    })
  }
  
  const getUsers = () => {
    return api.get (`/users`)
    .then((response)=>{
      return response
    })
  }

  const deleteCommentByCommentId = (comment_id) => {
    return api.delete(`/comments/${comment_id}`)
    
  }

  const getTopics = () => {
    return api.get('/topics')
    .then((response)=>{
      return response
    })
  }

  const getArticlesByTopic = (topic_slug) => {
    return api.get(`articles?sort_by=topic&topic=coding`)
    .then((response)=>{
      return response.data.articles
    })
  }
  export { getArticles, getArticleById, getCommentsById, patchVotesByArticleId, postCommentByArticleId, getUsers, deleteCommentByCommentId, getTopics, getArticlesByTopic  }