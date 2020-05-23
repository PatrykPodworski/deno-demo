import { Application, Router } from "https://deno.land/x/oak@v4.0.0/mod.ts";
import { MockMealsService } from "./services/MockMealsService.ts";

const app = new Application();
const router = new Router();

router.get("/meals", (context) => {
  context.response.body = MockMealsService.getAllMeals();
});

app.use(router.routes());

await app.listen({ port: 8000 });
