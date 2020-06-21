import React, { useEffect, useState } from "react";
import { getSongData } from "../../services/api/play";
import PlayInfo from "./components/PlayInfo";
import PlayArt from "./components/PlayArt";

function PlayWrapper({ view }) {
  const [songData, setSongData] = useState({});

  useEffect(() => {
    getSongData(songData, setSongData);
    const timer = setInterval(() => {
      getSongData(songData, setSongData);
    }, 5000);
    return () => clearInterval(timer);
  }, [songData, songData.song]);

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
