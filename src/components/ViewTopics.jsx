import {getTopics} from "../../api"
import  TopicCard  from "./TopicCard"
import {useState, useEffect } from "react"


export default function ViewTopics(){
    
    const [topics, setTopics] = useState([])

    useEffect(()=>{
        getTopics()
        .then((data) => {
            setTopics(data.data.topics)
        })
    }, [])
    return (
        <>
        <h1>Choose a topics you would like to read more about</h1>
          {topics.map((topic) => (
            <div className="topicList" key={topic.slug}>
              <TopicCard topic={topic} />
            </div>
          ))} 
        </>
      );
}
