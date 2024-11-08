import { Link } from "react-router-dom";
export default function TopicCard({ topic }) {

  return (
    <section className="topicCard">
      <Link to={`/articles/${topic.slug}`}>
        <p className="Topic"><strong>Topic: </strong> {topic.slug}</p>
      </Link>
      <p className="Topic"><strong>Description: </strong> {topic.description}</p>
    </section>
  );
}

