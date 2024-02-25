import { useState, useEffect } from "react";
import Marvel from "../components/Marvel";

function Home() {
  const [marvels, setMarvels] = useState([]);
  const getMarvels = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    setMarvels(json.data.results);
  };
  useEffect(() => {
    getMarvels();
  }, []);
  return (
    <div>
      <div>
        {marvels.map((marvel) => (
          <Marvel
            key={marvel.id}
            id={marvel.id}
            name={marvel.name}
            description={marvel.description}
            thumbnail={marvel.thumbnail}
            comics={marvel.comics}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
