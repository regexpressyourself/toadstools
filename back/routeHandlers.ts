import "https://deno.land/x/dotenv/load.ts";
import { Response } from "https://deno.land/x/oak/response.ts";

const KEY = Deno.env.get("KEY");
const SECRET = Deno.env.get("SECRET");
const SPOTSECRET = Deno.env.get("SPOTSECRET");

export const getNowPlayingData = async () => {
  const userName = "zookeeprr";
  const body = await (
    await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${userName}&api_key=${KEY}&format=json&nowplaying=true&limit=1`
    )
  ).json();
  const songData = body.recenttracks.track[0];
  const artist = songData.artist["#text"];
  const album = songData.album["#text"];
  const image = songData.image[songData.image.length - 1]["#text"];
  const song = songData.name;
  return {
    artist,
    album,
    image,
    song
  };
};

export const handle404 = () => {
  return "URL not found, yo\n";
};
