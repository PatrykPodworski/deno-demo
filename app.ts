import { Application } from "https://deno.land/x/oak@v4.0.0/mod.ts";
import router from "./routes.ts";

const port = 8000;
const app = new Application();

app.use(router.routes());

console.log(`Started the server on port: ${port}`);
await app.listen({ port });
