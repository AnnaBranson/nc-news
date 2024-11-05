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
    .catch((err)=>{
        return err
    })
  }

  const getCommentsById = (id) => {
    return api.get(`/articles/${id}/comments`)
    .then(({data})=> {
        return data.comments
    })
    .catch((err)=>{
        return err
    })
  }

  export {getArticles, getArticleById, getCommentsById }