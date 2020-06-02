import Meal from "../types/Meal.ts";

export default interface MealController {
  getAllMeals(): Meal[];
}
