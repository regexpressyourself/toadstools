import { Application, send } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { getNowPlayingData } from "./routeHandlers.ts";

const app = new Application();
//app.use(oakCors({'origin': 'http://192.168.0.3:3000'})); // Enable CORS for All Routes
app.use(oakCors()); // Enable CORS for All Routes

app.use(async ctx => {
  const req = ctx.request;
  if (req.url.pathname.slice(0, 7) === "/static") {
    await ctx.send({
      root: `${Deno.cwd()}/front/build`
    });
  } else {
    switch (req.url.pathname) {
      case "/":
        await ctx.send({
          root: `${Deno.cwd()}/front/build`,
          index: "index.html"
        });
        //ctx.response.body = await handleHome();
        break;
      case "/playing":
        ctx.response.body = await getNowPlayingData();
        break;
      default:
        await send(ctx, "", {
          root: `${Deno.cwd()}/front/build`,
          index: "index.html"
        });
    }
  }
  //ctx.response.body = "Hello World!";
});
await app.listen({ port: 8123 });
console.log("http://localhost:8123/");
