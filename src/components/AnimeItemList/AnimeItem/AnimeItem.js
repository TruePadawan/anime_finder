import StarIcon from "@mui/icons-material/Star";
import "./AnimeItem.css";

export default function AnimeItem(props) {
  return (
    <li className="animeItem">
      <a target="_blank" rel="noreferrer" href={props.url}>
        {props.title}
      </a>
      <div>
        <img src={props.imgSrc} alt={props.title} />
        <div>
          <span>
            <StarIcon /> {props.score}
          </span>
          <span>{props.episodes} EP</span>
        </div>
      </div>
    </li>
  );
}
