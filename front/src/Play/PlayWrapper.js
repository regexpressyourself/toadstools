import React, { useEffect, useState } from "react";
import axios from "axios";
import PlayInfo from "./components/PlayInfo";
import PlayArt from "./components/PlayArt";

function PlayWrapper({ view }) {
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

  switch (view) {
    case "art":
      return <PlayArt songData={songData} />;
    case "info":
      return <PlayInfo songData={songData} />;
    default:
      return null;
  }
}

export default PlayWrapper;
