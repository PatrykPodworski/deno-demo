import { Context } from "https://deno.land/x/oak@v4.0.0/mod.ts";

export default interface MealController {
  getAllMeals(context: Context): void;
}
