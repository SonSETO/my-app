import { Link } from "react-router-dom";

function Marvel({ id, name, description, thumbnail, comics }) {
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <h1>{name}</h1>
      </Link>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
      <p>{description}</p>
      <p>Comics Available: {comics.available}</p>
      <hr />
    </div>
  );
}

export default Marvel;
