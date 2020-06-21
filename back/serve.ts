import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { handleHome, handle404, getNowPlayingData } from "./routeHandlers.ts";

const app = new Application();
//app.use(oakCors({'origin': 'http://192.168.0.3:3000'})); // Enable CORS for All Routes
app.use(oakCors()); // Enable CORS for All Routes

app.use(async ctx => {
  const req = ctx.request;
  switch (req.url.pathname) {
    case "/":
      ctx.response.body = await handleHome();
      break;
    case "/playing":
      ctx.response.body = await getNowPlayingData();
      console.log("ctx.response");
      console.log(ctx.response);
      break;
    default:
      ctx.response.body = await handle404();
  }
  //ctx.response.body = "Hello World!";
});
await app.listen({ port: 8000 });
console.log("http://localhost:8000/");
