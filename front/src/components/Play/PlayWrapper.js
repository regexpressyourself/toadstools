import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSongData } from "../../services/api/play";
import PlayInfo from "./components/PlayInfo";
import PlayArt from "./components/PlayArt";

function PlayWrapper({ view }) {
  const [songData, setSongData] = useState({});
  const { user } = useParams();

  useEffect(() => {
    getSongData(songData, setSongData, user);
    const timer = setInterval(() => {
      getSongData(songData, setSongData, user);
    }, 5000);
    return () => clearInterval(timer);
  }, [songData, songData.song, user]);

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
