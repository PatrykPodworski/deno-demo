import { Context } from "https://deno.land/x/oak@v4.0.0/mod.ts";
import MealController from "./MealController.ts";
import Meal from "../types/Meal.ts";
import MealType from "../enums/MealType.ts";

export const MockMealController: MealController = {
  getAllMeals({ response }: Context) {
    const meals: Meal[] = [
      { id: 1, name: "Gnocchi with tomato sauce", type: MealType.Lunch },
      { id: 2, name: "Chicken wings with potatoes", type: MealType.Lunch },
      { id: 3, name: "Scrambled eggs", type: MealType.Breakfast },
      { id: 4, name: "Chocolate Banana Muffins", type: MealType.Dessert },
      { id: 5, name: "French Toasts", type: MealType.Dinner },
    ];

    response.body = {
      success: true,
      data: meals,
    };
  },
};
