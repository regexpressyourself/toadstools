import axios from "axios";
export const getSongData = async (songData, setSongData, user) => {
  const { data } = await axios.get(`/playing/${user && user}`);
  if (songData.song !== data.song) {
    setSongData(data);
  }
};
