import AnimeItem from "./AnimeItem/AnimeItem";

import "./AnimeItemList.css";

export default function AnimeItemList({ list }) {
  const resultList = list.map((item) => {
    return (
      <AnimeItem
        key={item.mal_id}
        imgSrc={item.images.jpg.large_image_url}
        url={item.url}
        title={item.title}
        score={item.score}
        episodes={item.episodes}
      />
    );
  });

  return <ul className="animeItemList">{resultList}</ul>;
}
