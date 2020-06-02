import { Router } from "https://deno.land/x/oak@v4.0.0/mod.ts";
import { MockMealController } from "./controllers/MockMealController.ts";

const router = new Router();

router.get("/meals", MockMealController.getAllMeals);

export default router;
