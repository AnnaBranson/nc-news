import axios from "axios"

const api = axios.create({
    baseURL: "https://be-nc-news-yl9m.onrender.com/api/",
  });

  const getArticles = () => {

    return api.get("/articles")
    .then(({data}) => {
        return data.articles
    })
    .catch ((err)=> {
        return err
    })
  }

  export {getArticles}