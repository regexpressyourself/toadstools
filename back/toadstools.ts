import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { getNowPlayingData } from "./routeHandlers.ts";

const router = new Router();
router.get("/playing/:user", async ctx => {
  if (ctx.params && ctx.params.user) {
    ctx.response.body = await getNowPlayingData(ctx.params.user);
  } else {
    ctx.response.body = await getNowPlayingData();
  }
});

const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes

app.use(router.routes());
app.use(router.allowedMethods());
app.use(async ctx => {
  const req = ctx.request;
  if (
    req.url.pathname.startsWith("/static") ||
    req.url.pathname.startsWith("/favicon")
  ) {
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
        break;
      default:
        await send(ctx, "", {
          root: `${Deno.cwd()}/front/build`,
          index: "index.html"
        });
    }
  }
});
await app.listen({ port: 8123 });
console.log("http://localhost:8123/");
