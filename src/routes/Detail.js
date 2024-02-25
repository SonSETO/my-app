import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const getMarvels = async () => {
      try {
        const response = await fetch(
          `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch character details");
        }
        const json = await response.json();
        setDetail(json.data.results[0]);
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };
    getMarvels();
  }, [id]);

  return (
    <div>
      {detail ? (
        <div>
          <Link to={detail.urls[0].url}>
            <h2>{detail.name}</h2>
          </Link>
          <p>Description: {detail.description}</p>
          <hr />
          <h3>Comics</h3>
          <ul>
            {detail.comics.items.map((comic, index) => (
              <li key={index}>{comic.name}</li>
            ))}
          </ul>
          <hr />
          <h3>Series</h3>
          <ul>
            {detail.series.items.map((series, index) => (
              <li key={index}>{series.name}</li>
            ))}
          </ul>
          <hr />
          <h3>Stories</h3>
          <ul>
            {detail.stories.items.map((story, index) => (
              <li key={index}>{story.name}</li>
            ))}
          </ul>
          <hr />
          <h3>Events</h3>
          <ul>
            {detail.events.items.map((event, index) => (
              <li key={index}>{event.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Detail;
