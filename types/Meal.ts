import MealType from "../enums/MealType.ts";

interface Meal {
  id: number;
  name: string;
  type: MealType;
}

export default Meal;
