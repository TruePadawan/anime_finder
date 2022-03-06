import StarIcon from "@mui/icons-material/Star";
import "./AnimeItem.css";

export default function AnimeItem(props) {
  return (
    <li className="animeItem">
      <p>{props.title}</p>
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
