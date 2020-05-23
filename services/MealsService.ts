import Meal from "../models/Meal.ts";

export default interface MealsService {
  getAllMeals(): Meal[];
}
