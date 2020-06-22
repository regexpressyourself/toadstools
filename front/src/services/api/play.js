import axios from "axios";
export const getSongData = async (songData, setSongData) => {
  const { data } = await axios.get("http://localhost:8123/playing");
  if (songData.song !== data.song) {
    setSongData(data);
  }
};
