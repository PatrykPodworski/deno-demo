import { Response } from "https://deno.land/x/oak@v4.0.0/mod.ts";
import Meal from "../types/Meal.ts";

export default interface MealController {
  getAllMeals(response: Response): void;
}
