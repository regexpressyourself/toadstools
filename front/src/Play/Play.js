import React, { useEffect, useState } from "react";
import axios from "axios";

function Play() {
  const [songData, setSongData] = useState({});

  useEffect(() => {
    const getSongData = async () => {
      const { data } = await axios.get("http://localhost:8000/playing");
      if (songData.song !== data.song) {
        setSongData(data);
      }
    };
    getSongData();
    setInterval(() => {
      getSongData();
    }, 5000);
  }, [songData.song]);

  return (
    <>
      {songData.song}
      <br />
      {songData.artist}
      <br />
      {songData.album}
      <br />
      <img alt="--" src={songData.image} />
    </>
  );
}

export default Play;
