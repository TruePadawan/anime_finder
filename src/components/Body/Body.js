import { useState } from "react";
import AnimeItemList from "../AnimeItemList/AnimeItemList";
import RestartAlt from "@mui/icons-material/RestartAlt";

import "./Body.css";

export default function Body() {
  const [animeList, setAnimeList] = useState([]);
  const [requestLoading, setRequestLoading] = useState(false);

  async function searchForAnime(title) {
    setRequestLoading(true);
    const request = await fetch(`https://api.jikan.moe/v4/anime?q=${title}`);

    if (!request.ok) {
      console.log(`${request.status} is the status code.`);
      return;
    }
    const data = (await request.json()).data;
    setAnimeList(data);
    setRequestLoading(false);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    let title = document.querySelector(".main-input-field > input").value;
    searchForAnime(title);
  }

  return (
    <>
      <form className="main-input-field" onSubmit={formSubmitHandler}>
        <h2>Find Anime</h2>
        <input minLength="2" required />
        <button>Search</button>
      </form>
      {requestLoading && <RestartAlt />}
      {!requestLoading && <AnimeItemList list={animeList} />}
    </>
  );
}
