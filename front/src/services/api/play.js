import axios from "axios";
export const getSongData = async (songData, setSongData, user) => {
  console.log("user");
  console.log(user);
  const { data } = await axios.get(
    `/playing/${user && user}`
  );
  if (songData.song !== data.song) {
    setSongData(data);
  }
};
