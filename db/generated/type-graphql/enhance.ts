import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Profile: crudResolvers.ProfileCrudResolver,
  WeighIn: crudResolvers.WeighInCrudResolver,
  Workout: crudResolvers.WorkoutCrudResolver,
  Recipe: crudResolvers.RecipeCrudResolver,
  Meal: crudResolvers.MealCrudResolver,
  RecipeInMeal: crudResolvers.RecipeInMealCrudResolver,
  Food: crudResolvers.FoodCrudResolver,
  FoodNutrition: crudResolvers.FoodNutritionCrudResolver,
  FoodInRecipe: crudResolvers.FoodInRecipeCrudResolver,
  FoodInMeal: crudResolvers.FoodInMealCrudResolver,
  Unit: crudResolvers.UnitCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Profile: {
    aggregateProfile: actionResolvers.AggregateProfileResolver,
    createManyProfile: actionResolvers.CreateManyProfileResolver,
    createOneProfile: actionResolvers.CreateOneProfileResolver,
    deleteManyProfile: actionResolvers.DeleteManyProfileResolver,
    deleteOneProfile: actionResolvers.DeleteOneProfileResolver,
    findFirstProfile: actionResolvers.FindFirstProfileResolver,
    findFirstProfileOrThrow: actionResolvers.FindFirstProfileOrThrowResolver,
    profiles: actionResolvers.FindManyProfileResolver,
    profile: actionResolvers.FindUniqueProfileResolver,
    getProfile: actionResolvers.FindUniqueProfileOrThrowResolver,
    groupByProfile: actionResolvers.GroupByProfileResolver,
    updateManyProfile: actionResolvers.UpdateManyProfileResolver,
    updateOneProfile: actionResolvers.UpdateOneProfileResolver,
    upsertOneProfile: actionResolvers.UpsertOneProfileResolver
  },
  WeighIn: {
    aggregateWeighIn: actionResolvers.AggregateWeighInResolver,
    createManyWeighIn: actionResolvers.CreateManyWeighInResolver,
    createOneWeighIn: actionResolvers.CreateOneWeighInResolver,
    deleteManyWeighIn: actionResolvers.DeleteManyWeighInResolver,
    deleteOneWeighIn: actionResolvers.DeleteOneWeighInResolver,
    findFirstWeighIn: actionResolvers.FindFirstWeighInResolver,
    findFirstWeighInOrThrow: actionResolvers.FindFirstWeighInOrThrowResolver,
    weighIns: actionResolvers.FindManyWeighInResolver,
    weighIn: actionResolvers.FindUniqueWeighInResolver,
    getWeighIn: actionResolvers.FindUniqueWeighInOrThrowResolver,
    groupByWeighIn: actionResolvers.GroupByWeighInResolver,
    updateManyWeighIn: actionResolvers.UpdateManyWeighInResolver,
    updateOneWeighIn: actionResolvers.UpdateOneWeighInResolver,
    upsertOneWeighIn: actionResolvers.UpsertOneWeighInResolver
  },
  Workout: {
    aggregateWorkout: actionResolvers.AggregateWorkoutResolver,
    createManyWorkout: actionResolvers.CreateManyWorkoutResolver,
    createOneWorkout: actionResolvers.CreateOneWorkoutResolver,
    deleteManyWorkout: actionResolvers.DeleteManyWorkoutResolver,
    deleteOneWorkout: actionResolvers.DeleteOneWorkoutResolver,
    findFirstWorkout: actionResolvers.FindFirstWorkoutResolver,
    findFirstWorkoutOrThrow: actionResolvers.FindFirstWorkoutOrThrowResolver,
    workouts: actionResolvers.FindManyWorkoutResolver,
    workout: actionResolvers.FindUniqueWorkoutResolver,
    getWorkout: actionResolvers.FindUniqueWorkoutOrThrowResolver,
    groupByWorkout: actionResolvers.GroupByWorkoutResolver,
    updateManyWorkout: actionResolvers.UpdateManyWorkoutResolver,
    updateOneWorkout: actionResolvers.UpdateOneWorkoutResolver,
    upsertOneWorkout: actionResolvers.UpsertOneWorkoutResolver
  },
  Recipe: {
    aggregateRecipe: actionResolvers.AggregateRecipeResolver,
    createManyRecipe: actionResolvers.CreateManyRecipeResolver,
    createOneRecipe: actionResolvers.CreateOneRecipeResolver,
    deleteManyRecipe: actionResolvers.DeleteManyRecipeResolver,
    deleteOneRecipe: actionResolvers.DeleteOneRecipeResolver,
    findFirstRecipe: actionResolvers.FindFirstRecipeResolver,
    findFirstRecipeOrThrow: actionResolvers.FindFirstRecipeOrThrowResolver,
    recipes: actionResolvers.FindManyRecipeResolver,
    recipe: actionResolvers.FindUniqueRecipeResolver,
    getRecipe: actionResolvers.FindUniqueRecipeOrThrowResolver,
    groupByRecipe: actionResolvers.GroupByRecipeResolver,
    updateManyRecipe: actionResolvers.UpdateManyRecipeResolver,
    updateOneRecipe: actionResolvers.UpdateOneRecipeResolver,
    upsertOneRecipe: actionResolvers.UpsertOneRecipeResolver
  },
  Meal: {
    aggregateMeal: actionResolvers.AggregateMealResolver,
    createManyMeal: actionResolvers.CreateManyMealResolver,
    createOneMeal: actionResolvers.CreateOneMealResolver,
    deleteManyMeal: actionResolvers.DeleteManyMealResolver,
    deleteOneMeal: actionResolvers.DeleteOneMealResolver,
    findFirstMeal: actionResolvers.FindFirstMealResolver,
    findFirstMealOrThrow: actionResolvers.FindFirstMealOrThrowResolver,
    meals: actionResolvers.FindManyMealResolver,
    meal: actionResolvers.FindUniqueMealResolver,
    getMeal: actionResolvers.FindUniqueMealOrThrowResolver,
    groupByMeal: actionResolvers.GroupByMealResolver,
    updateManyMeal: actionResolvers.UpdateManyMealResolver,
    updateOneMeal: actionResolvers.UpdateOneMealResolver,
    upsertOneMeal: actionResolvers.UpsertOneMealResolver
  },
  RecipeInMeal: {
    aggregateRecipeInMeal: actionResolvers.AggregateRecipeInMealResolver,
    createManyRecipeInMeal: actionResolvers.CreateManyRecipeInMealResolver,
    createOneRecipeInMeal: actionResolvers.CreateOneRecipeInMealResolver,
    deleteManyRecipeInMeal: actionResolvers.DeleteManyRecipeInMealResolver,
    deleteOneRecipeInMeal: actionResolvers.DeleteOneRecipeInMealResolver,
    findFirstRecipeInMeal: actionResolvers.FindFirstRecipeInMealResolver,
    findFirstRecipeInMealOrThrow: actionResolvers.FindFirstRecipeInMealOrThrowResolver,
    recipeInMeals: actionResolvers.FindManyRecipeInMealResolver,
    recipeInMeal: actionResolvers.FindUniqueRecipeInMealResolver,
    getRecipeInMeal: actionResolvers.FindUniqueRecipeInMealOrThrowResolver,
    groupByRecipeInMeal: actionResolvers.GroupByRecipeInMealResolver,
    updateManyRecipeInMeal: actionResolvers.UpdateManyRecipeInMealResolver,
    updateOneRecipeInMeal: actionResolvers.UpdateOneRecipeInMealResolver,
    upsertOneRecipeInMeal: actionResolvers.UpsertOneRecipeInMealResolver
  },
  Food: {
    aggregateFood: actionResolvers.AggregateFoodResolver,
    createManyFood: actionResolvers.CreateManyFoodResolver,
    createOneFood: actionResolvers.CreateOneFoodResolver,
    deleteManyFood: actionResolvers.DeleteManyFoodResolver,
    deleteOneFood: actionResolvers.DeleteOneFoodResolver,
    findFirstFood: actionResolvers.FindFirstFoodResolver,
    findFirstFoodOrThrow: actionResolvers.FindFirstFoodOrThrowResolver,
    foods: actionResolvers.FindManyFoodResolver,
    food: actionResolvers.FindUniqueFoodResolver,
    getFood: actionResolvers.FindUniqueFoodOrThrowResolver,
    groupByFood: actionResolvers.GroupByFoodResolver,
    updateManyFood: actionResolvers.UpdateManyFoodResolver,
    updateOneFood: actionResolvers.UpdateOneFoodResolver,
    upsertOneFood: actionResolvers.UpsertOneFoodResolver
  },
  FoodNutrition: {
    aggregateFoodNutrition: actionResolvers.AggregateFoodNutritionResolver,
    createManyFoodNutrition: actionResolvers.CreateManyFoodNutritionResolver,
    createOneFoodNutrition: actionResolvers.CreateOneFoodNutritionResolver,
    deleteManyFoodNutrition: actionResolvers.DeleteManyFoodNutritionResolver,
    deleteOneFoodNutrition: actionResolvers.DeleteOneFoodNutritionResolver,
    findFirstFoodNutrition: actionResolvers.FindFirstFoodNutritionResolver,
    findFirstFoodNutritionOrThrow: actionResolvers.FindFirstFoodNutritionOrThrowResolver,
    foodNutritions: actionResolvers.FindManyFoodNutritionResolver,
    foodNutrition: actionResolvers.FindUniqueFoodNutritionResolver,
    getFoodNutrition: actionResolvers.FindUniqueFoodNutritionOrThrowResolver,
    groupByFoodNutrition: actionResolvers.GroupByFoodNutritionResolver,
    updateManyFoodNutrition: actionResolvers.UpdateManyFoodNutritionResolver,
    updateOneFoodNutrition: actionResolvers.UpdateOneFoodNutritionResolver,
    upsertOneFoodNutrition: actionResolvers.UpsertOneFoodNutritionResolver
  },
  FoodInRecipe: {
    aggregateFoodInRecipe: actionResolvers.AggregateFoodInRecipeResolver,
    createManyFoodInRecipe: actionResolvers.CreateManyFoodInRecipeResolver,
    createOneFoodInRecipe: actionResolvers.CreateOneFoodInRecipeResolver,
    deleteManyFoodInRecipe: actionResolvers.DeleteManyFoodInRecipeResolver,
    deleteOneFoodInRecipe: actionResolvers.DeleteOneFoodInRecipeResolver,
    findFirstFoodInRecipe: actionResolvers.FindFirstFoodInRecipeResolver,
    findFirstFoodInRecipeOrThrow: actionResolvers.FindFirstFoodInRecipeOrThrowResolver,
    foodInRecipes: actionResolvers.FindManyFoodInRecipeResolver,
    foodInRecipe: actionResolvers.FindUniqueFoodInRecipeResolver,
    getFoodInRecipe: actionResolvers.FindUniqueFoodInRecipeOrThrowResolver,
    groupByFoodInRecipe: actionResolvers.GroupByFoodInRecipeResolver,
    updateManyFoodInRecipe: actionResolvers.UpdateManyFoodInRecipeResolver,
    updateOneFoodInRecipe: actionResolvers.UpdateOneFoodInRecipeResolver,
    upsertOneFoodInRecipe: actionResolvers.UpsertOneFoodInRecipeResolver
  },
  FoodInMeal: {
    aggregateFoodInMeal: actionResolvers.AggregateFoodInMealResolver,
    createManyFoodInMeal: actionResolvers.CreateManyFoodInMealResolver,
    createOneFoodInMeal: actionResolvers.CreateOneFoodInMealResolver,
    deleteManyFoodInMeal: actionResolvers.DeleteManyFoodInMealResolver,
    deleteOneFoodInMeal: actionResolvers.DeleteOneFoodInMealResolver,
    findFirstFoodInMeal: actionResolvers.FindFirstFoodInMealResolver,
    findFirstFoodInMealOrThrow: actionResolvers.FindFirstFoodInMealOrThrowResolver,
    foodInMeals: actionResolvers.FindManyFoodInMealResolver,
    foodInMeal: actionResolvers.FindUniqueFoodInMealResolver,
    getFoodInMeal: actionResolvers.FindUniqueFoodInMealOrThrowResolver,
    groupByFoodInMeal: actionResolvers.GroupByFoodInMealResolver,
    updateManyFoodInMeal: actionResolvers.UpdateManyFoodInMealResolver,
    updateOneFoodInMeal: actionResolvers.UpdateOneFoodInMealResolver,
    upsertOneFoodInMeal: actionResolvers.UpsertOneFoodInMealResolver
  },
  Unit: {
    aggregateUnit: actionResolvers.AggregateUnitResolver,
    createManyUnit: actionResolvers.CreateManyUnitResolver,
    createOneUnit: actionResolvers.CreateOneUnitResolver,
    deleteManyUnit: actionResolvers.DeleteManyUnitResolver,
    deleteOneUnit: actionResolvers.DeleteOneUnitResolver,
    findFirstUnit: actionResolvers.FindFirstUnitResolver,
    findFirstUnitOrThrow: actionResolvers.FindFirstUnitOrThrowResolver,
    units: actionResolvers.FindManyUnitResolver,
    unit: actionResolvers.FindUniqueUnitResolver,
    getUnit: actionResolvers.FindUniqueUnitOrThrowResolver,
    groupByUnit: actionResolvers.GroupByUnitResolver,
    updateManyUnit: actionResolvers.UpdateManyUnitResolver,
    updateOneUnit: actionResolvers.UpdateOneUnitResolver,
    upsertOneUnit: actionResolvers.UpsertOneUnitResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Profile: ["aggregateProfile", "createManyProfile", "createOneProfile", "deleteManyProfile", "deleteOneProfile", "findFirstProfile", "findFirstProfileOrThrow", "profiles", "profile", "getProfile", "groupByProfile", "updateManyProfile", "updateOneProfile", "upsertOneProfile"],
  WeighIn: ["aggregateWeighIn", "createManyWeighIn", "createOneWeighIn", "deleteManyWeighIn", "deleteOneWeighIn", "findFirstWeighIn", "findFirstWeighInOrThrow", "weighIns", "weighIn", "getWeighIn", "groupByWeighIn", "updateManyWeighIn", "updateOneWeighIn", "upsertOneWeighIn"],
  Workout: ["aggregateWorkout", "createManyWorkout", "createOneWorkout", "deleteManyWorkout", "deleteOneWorkout", "findFirstWorkout", "findFirstWorkoutOrThrow", "workouts", "workout", "getWorkout", "groupByWorkout", "updateManyWorkout", "updateOneWorkout", "upsertOneWorkout"],
  Recipe: ["aggregateRecipe", "createManyRecipe", "createOneRecipe", "deleteManyRecipe", "deleteOneRecipe", "findFirstRecipe", "findFirstRecipeOrThrow", "recipes", "recipe", "getRecipe", "groupByRecipe", "updateManyRecipe", "updateOneRecipe", "upsertOneRecipe"],
  Meal: ["aggregateMeal", "createManyMeal", "createOneMeal", "deleteManyMeal", "deleteOneMeal", "findFirstMeal", "findFirstMealOrThrow", "meals", "meal", "getMeal", "groupByMeal", "updateManyMeal", "updateOneMeal", "upsertOneMeal"],
  RecipeInMeal: ["aggregateRecipeInMeal", "createManyRecipeInMeal", "createOneRecipeInMeal", "deleteManyRecipeInMeal", "deleteOneRecipeInMeal", "findFirstRecipeInMeal", "findFirstRecipeInMealOrThrow", "recipeInMeals", "recipeInMeal", "getRecipeInMeal", "groupByRecipeInMeal", "updateManyRecipeInMeal", "updateOneRecipeInMeal", "upsertOneRecipeInMeal"],
  Food: ["aggregateFood", "createManyFood", "createOneFood", "deleteManyFood", "deleteOneFood", "findFirstFood", "findFirstFoodOrThrow", "foods", "food", "getFood", "groupByFood", "updateManyFood", "updateOneFood", "upsertOneFood"],
  FoodNutrition: ["aggregateFoodNutrition", "createManyFoodNutrition", "createOneFoodNutrition", "deleteManyFoodNutrition", "deleteOneFoodNutrition", "findFirstFoodNutrition", "findFirstFoodNutritionOrThrow", "foodNutritions", "foodNutrition", "getFoodNutrition", "groupByFoodNutrition", "updateManyFoodNutrition", "updateOneFoodNutrition", "upsertOneFoodNutrition"],
  FoodInRecipe: ["aggregateFoodInRecipe", "createManyFoodInRecipe", "createOneFoodInRecipe", "deleteManyFoodInRecipe", "deleteOneFoodInRecipe", "findFirstFoodInRecipe", "findFirstFoodInRecipeOrThrow", "foodInRecipes", "foodInRecipe", "getFoodInRecipe", "groupByFoodInRecipe", "updateManyFoodInRecipe", "updateOneFoodInRecipe", "upsertOneFoodInRecipe"],
  FoodInMeal: ["aggregateFoodInMeal", "createManyFoodInMeal", "createOneFoodInMeal", "deleteManyFoodInMeal", "deleteOneFoodInMeal", "findFirstFoodInMeal", "findFirstFoodInMealOrThrow", "foodInMeals", "foodInMeal", "getFoodInMeal", "groupByFoodInMeal", "updateManyFoodInMeal", "updateOneFoodInMeal", "upsertOneFoodInMeal"],
  Unit: ["aggregateUnit", "createManyUnit", "createOneUnit", "deleteManyUnit", "deleteOneUnit", "findFirstUnit", "findFirstUnitOrThrow", "units", "unit", "getUnit", "groupByUnit", "updateManyUnit", "updateOneUnit", "upsertOneUnit"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateProfileArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProfileArgs: ["data", "skipDuplicates"],
  CreateOneProfileArgs: ["data"],
  DeleteManyProfileArgs: ["where"],
  DeleteOneProfileArgs: ["where"],
  FindFirstProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProfileOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProfileArgs: ["where"],
  FindUniqueProfileOrThrowArgs: ["where"],
  GroupByProfileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProfileArgs: ["data", "where"],
  UpdateOneProfileArgs: ["data", "where"],
  UpsertOneProfileArgs: ["where", "create", "update"],
  AggregateWeighInArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWeighInArgs: ["data", "skipDuplicates"],
  CreateOneWeighInArgs: ["data"],
  DeleteManyWeighInArgs: ["where"],
  DeleteOneWeighInArgs: ["where"],
  FindFirstWeighInArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWeighInOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWeighInArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWeighInArgs: ["where"],
  FindUniqueWeighInOrThrowArgs: ["where"],
  GroupByWeighInArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWeighInArgs: ["data", "where"],
  UpdateOneWeighInArgs: ["data", "where"],
  UpsertOneWeighInArgs: ["where", "create", "update"],
  AggregateWorkoutArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWorkoutArgs: ["data", "skipDuplicates"],
  CreateOneWorkoutArgs: ["data"],
  DeleteManyWorkoutArgs: ["where"],
  DeleteOneWorkoutArgs: ["where"],
  FindFirstWorkoutArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWorkoutOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWorkoutArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWorkoutArgs: ["where"],
  FindUniqueWorkoutOrThrowArgs: ["where"],
  GroupByWorkoutArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWorkoutArgs: ["data", "where"],
  UpdateOneWorkoutArgs: ["data", "where"],
  UpsertOneWorkoutArgs: ["where", "create", "update"],
  AggregateRecipeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyRecipeArgs: ["data", "skipDuplicates"],
  CreateOneRecipeArgs: ["data"],
  DeleteManyRecipeArgs: ["where"],
  DeleteOneRecipeArgs: ["where"],
  FindFirstRecipeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstRecipeOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRecipeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueRecipeArgs: ["where"],
  FindUniqueRecipeOrThrowArgs: ["where"],
  GroupByRecipeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyRecipeArgs: ["data", "where"],
  UpdateOneRecipeArgs: ["data", "where"],
  UpsertOneRecipeArgs: ["where", "create", "update"],
  AggregateMealArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMealArgs: ["data", "skipDuplicates"],
  CreateOneMealArgs: ["data"],
  DeleteManyMealArgs: ["where"],
  DeleteOneMealArgs: ["where"],
  FindFirstMealArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMealOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMealArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMealArgs: ["where"],
  FindUniqueMealOrThrowArgs: ["where"],
  GroupByMealArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMealArgs: ["data", "where"],
  UpdateOneMealArgs: ["data", "where"],
  UpsertOneMealArgs: ["where", "create", "update"],
  AggregateRecipeInMealArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyRecipeInMealArgs: ["data", "skipDuplicates"],
  CreateOneRecipeInMealArgs: ["data"],
  DeleteManyRecipeInMealArgs: ["where"],
  DeleteOneRecipeInMealArgs: ["where"],
  FindFirstRecipeInMealArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstRecipeInMealOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRecipeInMealArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueRecipeInMealArgs: ["where"],
  FindUniqueRecipeInMealOrThrowArgs: ["where"],
  GroupByRecipeInMealArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyRecipeInMealArgs: ["data", "where"],
  UpdateOneRecipeInMealArgs: ["data", "where"],
  UpsertOneRecipeInMealArgs: ["where", "create", "update"],
  AggregateFoodArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyFoodArgs: ["data", "skipDuplicates"],
  CreateOneFoodArgs: ["data"],
  DeleteManyFoodArgs: ["where"],
  DeleteOneFoodArgs: ["where"],
  FindFirstFoodArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstFoodOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFoodArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueFoodArgs: ["where"],
  FindUniqueFoodOrThrowArgs: ["where"],
  GroupByFoodArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyFoodArgs: ["data", "where"],
  UpdateOneFoodArgs: ["data", "where"],
  UpsertOneFoodArgs: ["where", "create", "update"],
  AggregateFoodNutritionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyFoodNutritionArgs: ["data", "skipDuplicates"],
  CreateOneFoodNutritionArgs: ["data"],
  DeleteManyFoodNutritionArgs: ["where"],
  DeleteOneFoodNutritionArgs: ["where"],
  FindFirstFoodNutritionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstFoodNutritionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFoodNutritionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueFoodNutritionArgs: ["where"],
  FindUniqueFoodNutritionOrThrowArgs: ["where"],
  GroupByFoodNutritionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyFoodNutritionArgs: ["data", "where"],
  UpdateOneFoodNutritionArgs: ["data", "where"],
  UpsertOneFoodNutritionArgs: ["where", "create", "update"],
  AggregateFoodInRecipeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyFoodInRecipeArgs: ["data", "skipDuplicates"],
  CreateOneFoodInRecipeArgs: ["data"],
  DeleteManyFoodInRecipeArgs: ["where"],
  DeleteOneFoodInRecipeArgs: ["where"],
  FindFirstFoodInRecipeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstFoodInRecipeOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFoodInRecipeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueFoodInRecipeArgs: ["where"],
  FindUniqueFoodInRecipeOrThrowArgs: ["where"],
  GroupByFoodInRecipeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyFoodInRecipeArgs: ["data", "where"],
  UpdateOneFoodInRecipeArgs: ["data", "where"],
  UpsertOneFoodInRecipeArgs: ["where", "create", "update"],
  AggregateFoodInMealArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyFoodInMealArgs: ["data", "skipDuplicates"],
  CreateOneFoodInMealArgs: ["data"],
  DeleteManyFoodInMealArgs: ["where"],
  DeleteOneFoodInMealArgs: ["where"],
  FindFirstFoodInMealArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstFoodInMealOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFoodInMealArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueFoodInMealArgs: ["where"],
  FindUniqueFoodInMealOrThrowArgs: ["where"],
  GroupByFoodInMealArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyFoodInMealArgs: ["data", "where"],
  UpdateOneFoodInMealArgs: ["data", "where"],
  UpsertOneFoodInMealArgs: ["where", "create", "update"],
  AggregateUnitArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUnitArgs: ["data", "skipDuplicates"],
  CreateOneUnitArgs: ["data"],
  DeleteManyUnitArgs: ["where"],
  DeleteOneUnitArgs: ["where"],
  FindFirstUnitArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUnitOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUnitArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUnitArgs: ["where"],
  FindUniqueUnitOrThrowArgs: ["where"],
  GroupByUnitArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUnitArgs: ["data", "where"],
  UpdateOneUnitArgs: ["data", "where"],
  UpsertOneUnitArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all ?? [];
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Profile: relationResolvers.ProfileRelationsResolver,
  WeighIn: relationResolvers.WeighInRelationsResolver,
  Workout: relationResolvers.WorkoutRelationsResolver,
  Recipe: relationResolvers.RecipeRelationsResolver,
  Meal: relationResolvers.MealRelationsResolver,
  RecipeInMeal: relationResolvers.RecipeInMealRelationsResolver,
  Food: relationResolvers.FoodRelationsResolver,
  FoodNutrition: relationResolvers.FoodNutritionRelationsResolver,
  FoodInRecipe: relationResolvers.FoodInRecipeRelationsResolver,
  FoodInMeal: relationResolvers.FoodInMealRelationsResolver,
  Unit: relationResolvers.UnitRelationsResolver
};
const relationResolversInfo = {
  User: ["profile", "meals", "weighIns", "workouts", "recipes"],
  Profile: ["user"],
  WeighIn: ["user"],
  Workout: ["user"],
  Recipe: ["user", "foods", "meals"],
  Meal: ["user", "foods", "recipes"],
  RecipeInMeal: ["recipe", "meal", "unit"],
  Food: ["nutrition", "meals", "recipes"],
  FoodNutrition: ["food", "unit"],
  FoodInRecipe: ["food", "recipe", "unit"],
  FoodInMeal: ["food", "meal", "unit"],
  Unit: ["mealFoods", "mealRecipe", "recipeFoods", "foodNutrition"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "email", "password", "createdAt", "updatedAt"],
  Profile: ["id", "userId", "firstName", "lastName", "calorieGoal", "weightGoal", "metric"],
  WeighIn: ["id", "userId", "weight", "createdAt"],
  Workout: ["id", "userId", "name", "calories"],
  Recipe: ["id", "userId", "name"],
  Meal: ["id", "userId", "mealType"],
  RecipeInMeal: ["id", "recipeId", "mealId", "quantity", "unitId"],
  Food: ["id", "name", "brand"],
  FoodNutrition: ["id", "foodId", "quantity", "unitId", "calories", "protein", "fat", "carbs"],
  FoodInRecipe: ["id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInMeal: ["id", "foodId", "mealId", "quantity", "unitId"],
  Unit: ["id", "name", "shortname", "volume"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "email", "password", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProfile: ["_count", "_avg", "_sum", "_min", "_max"],
  ProfileGroupBy: ["id", "userId", "firstName", "lastName", "calorieGoal", "weightGoal", "metric", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateWeighIn: ["_count", "_avg", "_sum", "_min", "_max"],
  WeighInGroupBy: ["id", "userId", "weight", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateWorkout: ["_count", "_avg", "_sum", "_min", "_max"],
  WorkoutGroupBy: ["id", "userId", "name", "calories", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateRecipe: ["_count", "_avg", "_sum", "_min", "_max"],
  RecipeGroupBy: ["id", "userId", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMeal: ["_count", "_avg", "_sum", "_min", "_max"],
  MealGroupBy: ["id", "userId", "mealType", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateRecipeInMeal: ["_count", "_avg", "_sum", "_min", "_max"],
  RecipeInMealGroupBy: ["id", "recipeId", "mealId", "quantity", "unitId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFood: ["_count", "_avg", "_sum", "_min", "_max"],
  FoodGroupBy: ["id", "name", "brand", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFoodNutrition: ["_count", "_avg", "_sum", "_min", "_max"],
  FoodNutritionGroupBy: ["id", "foodId", "quantity", "unitId", "calories", "protein", "fat", "carbs", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFoodInRecipe: ["_count", "_avg", "_sum", "_min", "_max"],
  FoodInRecipeGroupBy: ["id", "foodId", "recipeId", "quantity", "unitId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFoodInMeal: ["_count", "_avg", "_sum", "_min", "_max"],
  FoodInMealGroupBy: ["id", "foodId", "mealId", "quantity", "unitId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUnit: ["_count", "_avg", "_sum", "_min", "_max"],
  UnitGroupBy: ["id", "name", "shortname", "volume", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["meals", "weighIns", "workouts", "recipes"],
  UserCountAggregate: ["id", "email", "password", "createdAt", "updatedAt", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "email", "password", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "email", "password", "createdAt", "updatedAt"],
  ProfileCountAggregate: ["id", "userId", "firstName", "lastName", "calorieGoal", "weightGoal", "metric", "_all"],
  ProfileAvgAggregate: ["id", "userId", "calorieGoal", "weightGoal"],
  ProfileSumAggregate: ["id", "userId", "calorieGoal", "weightGoal"],
  ProfileMinAggregate: ["id", "userId", "firstName", "lastName", "calorieGoal", "weightGoal", "metric"],
  ProfileMaxAggregate: ["id", "userId", "firstName", "lastName", "calorieGoal", "weightGoal", "metric"],
  WeighInCountAggregate: ["id", "userId", "weight", "createdAt", "_all"],
  WeighInAvgAggregate: ["id", "userId", "weight"],
  WeighInSumAggregate: ["id", "userId", "weight"],
  WeighInMinAggregate: ["id", "userId", "weight", "createdAt"],
  WeighInMaxAggregate: ["id", "userId", "weight", "createdAt"],
  WorkoutCountAggregate: ["id", "userId", "name", "calories", "_all"],
  WorkoutAvgAggregate: ["id", "userId", "calories"],
  WorkoutSumAggregate: ["id", "userId", "calories"],
  WorkoutMinAggregate: ["id", "userId", "name", "calories"],
  WorkoutMaxAggregate: ["id", "userId", "name", "calories"],
  RecipeCount: ["foods", "meals"],
  RecipeCountAggregate: ["id", "userId", "name", "_all"],
  RecipeAvgAggregate: ["id", "userId"],
  RecipeSumAggregate: ["id", "userId"],
  RecipeMinAggregate: ["id", "userId", "name"],
  RecipeMaxAggregate: ["id", "userId", "name"],
  MealCount: ["foods", "recipes"],
  MealCountAggregate: ["id", "userId", "mealType", "_all"],
  MealAvgAggregate: ["id", "userId"],
  MealSumAggregate: ["id", "userId"],
  MealMinAggregate: ["id", "userId", "mealType"],
  MealMaxAggregate: ["id", "userId", "mealType"],
  RecipeInMealCountAggregate: ["id", "recipeId", "mealId", "quantity", "unitId", "_all"],
  RecipeInMealAvgAggregate: ["id", "recipeId", "mealId", "quantity", "unitId"],
  RecipeInMealSumAggregate: ["id", "recipeId", "mealId", "quantity", "unitId"],
  RecipeInMealMinAggregate: ["id", "recipeId", "mealId", "quantity", "unitId"],
  RecipeInMealMaxAggregate: ["id", "recipeId", "mealId", "quantity", "unitId"],
  FoodCount: ["nutrition", "meals", "recipes"],
  FoodCountAggregate: ["id", "name", "brand", "_all"],
  FoodAvgAggregate: ["id"],
  FoodSumAggregate: ["id"],
  FoodMinAggregate: ["id", "name", "brand"],
  FoodMaxAggregate: ["id", "name", "brand"],
  FoodNutritionCountAggregate: ["id", "foodId", "quantity", "unitId", "calories", "protein", "fat", "carbs", "_all"],
  FoodNutritionAvgAggregate: ["id", "foodId", "quantity", "unitId", "calories", "protein", "fat", "carbs"],
  FoodNutritionSumAggregate: ["id", "foodId", "quantity", "unitId", "calories", "protein", "fat", "carbs"],
  FoodNutritionMinAggregate: ["id", "foodId", "quantity", "unitId", "calories", "protein", "fat", "carbs"],
  FoodNutritionMaxAggregate: ["id", "foodId", "quantity", "unitId", "calories", "protein", "fat", "carbs"],
  FoodInRecipeCountAggregate: ["id", "foodId", "recipeId", "quantity", "unitId", "_all"],
  FoodInRecipeAvgAggregate: ["id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInRecipeSumAggregate: ["id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInRecipeMinAggregate: ["id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInRecipeMaxAggregate: ["id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInMealCountAggregate: ["id", "foodId", "mealId", "quantity", "unitId", "_all"],
  FoodInMealAvgAggregate: ["id", "foodId", "mealId", "quantity", "unitId"],
  FoodInMealSumAggregate: ["id", "foodId", "mealId", "quantity", "unitId"],
  FoodInMealMinAggregate: ["id", "foodId", "mealId", "quantity", "unitId"],
  FoodInMealMaxAggregate: ["id", "foodId", "mealId", "quantity", "unitId"],
  UnitCount: ["mealFoods", "mealRecipe", "recipeFoods", "foodNutrition"],
  UnitCountAggregate: ["id", "name", "shortname", "volume", "_all"],
  UnitAvgAggregate: ["id"],
  UnitSumAggregate: ["id"],
  UnitMinAggregate: ["id", "name", "shortname", "volume"],
  UnitMaxAggregate: ["id", "name", "shortname", "volume"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "password", "createdAt", "updatedAt", "profile", "meals", "weighIns", "workouts", "recipes"],
  UserOrderByWithRelationInput: ["id", "email", "password", "createdAt", "updatedAt", "profile", "meals", "weighIns", "workouts", "recipes"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "email", "password", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "password", "createdAt", "updatedAt"],
  ProfileWhereInput: ["AND", "OR", "NOT", "id", "userId", "firstName", "lastName", "calorieGoal", "weightGoal", "metric", "user"],
  ProfileOrderByWithRelationInput: ["id", "userId", "firstName", "lastName", "calorieGoal", "weightGoal", "metric", "user"],
  ProfileWhereUniqueInput: ["id", "userId"],
  ProfileOrderByWithAggregationInput: ["id", "userId", "firstName", "lastName", "calorieGoal", "weightGoal", "metric", "_count", "_avg", "_max", "_min", "_sum"],
  ProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "firstName", "lastName", "calorieGoal", "weightGoal", "metric"],
  WeighInWhereInput: ["AND", "OR", "NOT", "id", "userId", "weight", "createdAt", "user"],
  WeighInOrderByWithRelationInput: ["id", "userId", "weight", "createdAt", "user"],
  WeighInWhereUniqueInput: ["id"],
  WeighInOrderByWithAggregationInput: ["id", "userId", "weight", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  WeighInScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "weight", "createdAt"],
  WorkoutWhereInput: ["AND", "OR", "NOT", "id", "userId", "name", "calories", "user"],
  WorkoutOrderByWithRelationInput: ["id", "userId", "name", "calories", "user"],
  WorkoutWhereUniqueInput: ["id"],
  WorkoutOrderByWithAggregationInput: ["id", "userId", "name", "calories", "_count", "_avg", "_max", "_min", "_sum"],
  WorkoutScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "name", "calories"],
  RecipeWhereInput: ["AND", "OR", "NOT", "id", "userId", "name", "user", "foods", "meals"],
  RecipeOrderByWithRelationInput: ["id", "userId", "name", "user", "foods", "meals"],
  RecipeWhereUniqueInput: ["id"],
  RecipeOrderByWithAggregationInput: ["id", "userId", "name", "_count", "_avg", "_max", "_min", "_sum"],
  RecipeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "name"],
  MealWhereInput: ["AND", "OR", "NOT", "id", "userId", "mealType", "user", "foods", "recipes"],
  MealOrderByWithRelationInput: ["id", "userId", "mealType", "user", "foods", "recipes"],
  MealWhereUniqueInput: ["id"],
  MealOrderByWithAggregationInput: ["id", "userId", "mealType", "_count", "_avg", "_max", "_min", "_sum"],
  MealScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "mealType"],
  RecipeInMealWhereInput: ["AND", "OR", "NOT", "id", "recipeId", "mealId", "quantity", "unitId", "recipe", "meal", "unit"],
  RecipeInMealOrderByWithRelationInput: ["id", "recipeId", "mealId", "quantity", "unitId", "recipe", "meal", "unit"],
  RecipeInMealWhereUniqueInput: ["id"],
  RecipeInMealOrderByWithAggregationInput: ["id", "recipeId", "mealId", "quantity", "unitId", "_count", "_avg", "_max", "_min", "_sum"],
  RecipeInMealScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "recipeId", "mealId", "quantity", "unitId"],
  FoodWhereInput: ["AND", "OR", "NOT", "id", "name", "brand", "nutrition", "meals", "recipes"],
  FoodOrderByWithRelationInput: ["id", "name", "brand", "nutrition", "meals", "recipes"],
  FoodWhereUniqueInput: ["id", "name_brand"],
  FoodOrderByWithAggregationInput: ["id", "name", "brand", "_count", "_avg", "_max", "_min", "_sum"],
  FoodScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "brand"],
  FoodNutritionWhereInput: ["AND", "OR", "NOT", "id", "foodId", "quantity", "unitId", "calories", "protein", "fat", "carbs", "food", "unit"],
  FoodNutritionOrderByWithRelationInput: ["id", "foodId", "quantity", "unitId", "calories", "protein", "fat", "carbs", "food", "unit"],
  FoodNutritionWhereUniqueInput: ["id"],
  FoodNutritionOrderByWithAggregationInput: ["id", "foodId", "quantity", "unitId", "calories", "protein", "fat", "carbs", "_count", "_avg", "_max", "_min", "_sum"],
  FoodNutritionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "foodId", "quantity", "unitId", "calories", "protein", "fat", "carbs"],
  FoodInRecipeWhereInput: ["AND", "OR", "NOT", "id", "foodId", "recipeId", "quantity", "unitId", "food", "recipe", "unit"],
  FoodInRecipeOrderByWithRelationInput: ["id", "foodId", "recipeId", "quantity", "unitId", "food", "recipe", "unit"],
  FoodInRecipeWhereUniqueInput: ["id"],
  FoodInRecipeOrderByWithAggregationInput: ["id", "foodId", "recipeId", "quantity", "unitId", "_count", "_avg", "_max", "_min", "_sum"],
  FoodInRecipeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInMealWhereInput: ["AND", "OR", "NOT", "id", "foodId", "mealId", "quantity", "unitId", "food", "meal", "unit"],
  FoodInMealOrderByWithRelationInput: ["id", "foodId", "mealId", "quantity", "unitId", "food", "meal", "unit"],
  FoodInMealWhereUniqueInput: ["id"],
  FoodInMealOrderByWithAggregationInput: ["id", "foodId", "mealId", "quantity", "unitId", "_count", "_avg", "_max", "_min", "_sum"],
  FoodInMealScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "foodId", "mealId", "quantity", "unitId"],
  UnitWhereInput: ["AND", "OR", "NOT", "id", "name", "shortname", "volume", "mealFoods", "mealRecipe", "recipeFoods", "foodNutrition"],
  UnitOrderByWithRelationInput: ["id", "name", "shortname", "volume", "mealFoods", "mealRecipe", "recipeFoods", "foodNutrition"],
  UnitWhereUniqueInput: ["id"],
  UnitOrderByWithAggregationInput: ["id", "name", "shortname", "volume", "_count", "_avg", "_max", "_min", "_sum"],
  UnitScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "shortname", "volume"],
  UserCreateInput: ["email", "password", "createdAt", "updatedAt", "profile", "meals", "weighIns", "workouts", "recipes"],
  UserUpdateInput: ["email", "password", "createdAt", "updatedAt", "profile", "meals", "weighIns", "workouts", "recipes"],
  UserCreateManyInput: ["id", "email", "password", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["email", "password", "createdAt", "updatedAt"],
  ProfileCreateInput: ["firstName", "lastName", "calorieGoal", "weightGoal", "metric", "user"],
  ProfileUpdateInput: ["firstName", "lastName", "calorieGoal", "weightGoal", "metric", "user"],
  ProfileCreateManyInput: ["id", "userId", "firstName", "lastName", "calorieGoal", "weightGoal", "metric"],
  ProfileUpdateManyMutationInput: ["firstName", "lastName", "calorieGoal", "weightGoal", "metric"],
  WeighInCreateInput: ["weight", "createdAt", "user"],
  WeighInUpdateInput: ["weight", "createdAt", "user"],
  WeighInCreateManyInput: ["id", "userId", "weight", "createdAt"],
  WeighInUpdateManyMutationInput: ["weight", "createdAt"],
  WorkoutCreateInput: ["name", "calories", "user"],
  WorkoutUpdateInput: ["name", "calories", "user"],
  WorkoutCreateManyInput: ["id", "userId", "name", "calories"],
  WorkoutUpdateManyMutationInput: ["name", "calories"],
  RecipeCreateInput: ["name", "user", "foods", "meals"],
  RecipeUpdateInput: ["name", "user", "foods", "meals"],
  RecipeCreateManyInput: ["id", "userId", "name"],
  RecipeUpdateManyMutationInput: ["name"],
  MealCreateInput: ["mealType", "user", "foods", "recipes"],
  MealUpdateInput: ["mealType", "user", "foods", "recipes"],
  MealCreateManyInput: ["id", "userId", "mealType"],
  MealUpdateManyMutationInput: ["mealType"],
  RecipeInMealCreateInput: ["quantity", "recipe", "meal", "unit"],
  RecipeInMealUpdateInput: ["quantity", "recipe", "meal", "unit"],
  RecipeInMealCreateManyInput: ["id", "recipeId", "mealId", "quantity", "unitId"],
  RecipeInMealUpdateManyMutationInput: ["quantity"],
  FoodCreateInput: ["name", "brand", "nutrition", "meals", "recipes"],
  FoodUpdateInput: ["name", "brand", "nutrition", "meals", "recipes"],
  FoodCreateManyInput: ["id", "name", "brand"],
  FoodUpdateManyMutationInput: ["name", "brand"],
  FoodNutritionCreateInput: ["quantity", "calories", "protein", "fat", "carbs", "food", "unit"],
  FoodNutritionUpdateInput: ["quantity", "calories", "protein", "fat", "carbs", "food", "unit"],
  FoodNutritionCreateManyInput: ["id", "foodId", "quantity", "unitId", "calories", "protein", "fat", "carbs"],
  FoodNutritionUpdateManyMutationInput: ["quantity", "calories", "protein", "fat", "carbs"],
  FoodInRecipeCreateInput: ["quantity", "food", "recipe", "unit"],
  FoodInRecipeUpdateInput: ["quantity", "food", "recipe", "unit"],
  FoodInRecipeCreateManyInput: ["id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInRecipeUpdateManyMutationInput: ["quantity"],
  FoodInMealCreateInput: ["quantity", "food", "meal", "unit"],
  FoodInMealUpdateInput: ["quantity", "food", "meal", "unit"],
  FoodInMealCreateManyInput: ["id", "foodId", "mealId", "quantity", "unitId"],
  FoodInMealUpdateManyMutationInput: ["quantity"],
  UnitCreateInput: ["name", "shortname", "volume", "mealFoods", "mealRecipe", "recipeFoods", "foodNutrition"],
  UnitUpdateInput: ["name", "shortname", "volume", "mealFoods", "mealRecipe", "recipeFoods", "foodNutrition"],
  UnitCreateManyInput: ["id", "name", "shortname", "volume"],
  UnitUpdateManyMutationInput: ["name", "shortname", "volume"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ProfileRelationFilter: ["is", "isNot"],
  MealListRelationFilter: ["every", "some", "none"],
  WeighInListRelationFilter: ["every", "some", "none"],
  WorkoutListRelationFilter: ["every", "some", "none"],
  RecipeListRelationFilter: ["every", "some", "none"],
  MealOrderByRelationAggregateInput: ["_count"],
  WeighInOrderByRelationAggregateInput: ["_count"],
  WorkoutOrderByRelationAggregateInput: ["_count"],
  RecipeOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "email", "password", "createdAt", "updatedAt"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "email", "password", "createdAt", "updatedAt"],
  UserMinOrderByAggregateInput: ["id", "email", "password", "createdAt", "updatedAt"],
  UserSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  DecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  UserRelationFilter: ["is", "isNot"],
  ProfileCountOrderByAggregateInput: ["id", "userId", "firstName", "lastName", "calorieGoal", "weightGoal", "metric"],
  ProfileAvgOrderByAggregateInput: ["id", "userId", "calorieGoal", "weightGoal"],
  ProfileMaxOrderByAggregateInput: ["id", "userId", "firstName", "lastName", "calorieGoal", "weightGoal", "metric"],
  ProfileMinOrderByAggregateInput: ["id", "userId", "firstName", "lastName", "calorieGoal", "weightGoal", "metric"],
  ProfileSumOrderByAggregateInput: ["id", "userId", "calorieGoal", "weightGoal"],
  DecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  WeighInCountOrderByAggregateInput: ["id", "userId", "weight", "createdAt"],
  WeighInAvgOrderByAggregateInput: ["id", "userId", "weight"],
  WeighInMaxOrderByAggregateInput: ["id", "userId", "weight", "createdAt"],
  WeighInMinOrderByAggregateInput: ["id", "userId", "weight", "createdAt"],
  WeighInSumOrderByAggregateInput: ["id", "userId", "weight"],
  WorkoutCountOrderByAggregateInput: ["id", "userId", "name", "calories"],
  WorkoutAvgOrderByAggregateInput: ["id", "userId", "calories"],
  WorkoutMaxOrderByAggregateInput: ["id", "userId", "name", "calories"],
  WorkoutMinOrderByAggregateInput: ["id", "userId", "name", "calories"],
  WorkoutSumOrderByAggregateInput: ["id", "userId", "calories"],
  FoodInRecipeListRelationFilter: ["every", "some", "none"],
  RecipeInMealListRelationFilter: ["every", "some", "none"],
  FoodInRecipeOrderByRelationAggregateInput: ["_count"],
  RecipeInMealOrderByRelationAggregateInput: ["_count"],
  RecipeCountOrderByAggregateInput: ["id", "userId", "name"],
  RecipeAvgOrderByAggregateInput: ["id", "userId"],
  RecipeMaxOrderByAggregateInput: ["id", "userId", "name"],
  RecipeMinOrderByAggregateInput: ["id", "userId", "name"],
  RecipeSumOrderByAggregateInput: ["id", "userId"],
  EnumMealTypeFilter: ["equals", "in", "notIn", "not"],
  FoodInMealListRelationFilter: ["every", "some", "none"],
  FoodInMealOrderByRelationAggregateInput: ["_count"],
  MealCountOrderByAggregateInput: ["id", "userId", "mealType"],
  MealAvgOrderByAggregateInput: ["id", "userId"],
  MealMaxOrderByAggregateInput: ["id", "userId", "mealType"],
  MealMinOrderByAggregateInput: ["id", "userId", "mealType"],
  MealSumOrderByAggregateInput: ["id", "userId"],
  EnumMealTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  RecipeRelationFilter: ["is", "isNot"],
  MealRelationFilter: ["is", "isNot"],
  UnitRelationFilter: ["is", "isNot"],
  RecipeInMealCountOrderByAggregateInput: ["id", "recipeId", "mealId", "quantity", "unitId"],
  RecipeInMealAvgOrderByAggregateInput: ["id", "recipeId", "mealId", "quantity", "unitId"],
  RecipeInMealMaxOrderByAggregateInput: ["id", "recipeId", "mealId", "quantity", "unitId"],
  RecipeInMealMinOrderByAggregateInput: ["id", "recipeId", "mealId", "quantity", "unitId"],
  RecipeInMealSumOrderByAggregateInput: ["id", "recipeId", "mealId", "quantity", "unitId"],
  FoodNutritionListRelationFilter: ["every", "some", "none"],
  FoodNutritionOrderByRelationAggregateInput: ["_count"],
  FoodNameBrandCompoundUniqueInput: ["name", "brand"],
  FoodCountOrderByAggregateInput: ["id", "name", "brand"],
  FoodAvgOrderByAggregateInput: ["id"],
  FoodMaxOrderByAggregateInput: ["id", "name", "brand"],
  FoodMinOrderByAggregateInput: ["id", "name", "brand"],
  FoodSumOrderByAggregateInput: ["id"],
  FoodRelationFilter: ["is", "isNot"],
  FoodNutritionCountOrderByAggregateInput: ["id", "foodId", "quantity", "unitId", "calories", "protein", "fat", "carbs"],
  FoodNutritionAvgOrderByAggregateInput: ["id", "foodId", "quantity", "unitId", "calories", "protein", "fat", "carbs"],
  FoodNutritionMaxOrderByAggregateInput: ["id", "foodId", "quantity", "unitId", "calories", "protein", "fat", "carbs"],
  FoodNutritionMinOrderByAggregateInput: ["id", "foodId", "quantity", "unitId", "calories", "protein", "fat", "carbs"],
  FoodNutritionSumOrderByAggregateInput: ["id", "foodId", "quantity", "unitId", "calories", "protein", "fat", "carbs"],
  FoodInRecipeCountOrderByAggregateInput: ["id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInRecipeAvgOrderByAggregateInput: ["id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInRecipeMaxOrderByAggregateInput: ["id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInRecipeMinOrderByAggregateInput: ["id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInRecipeSumOrderByAggregateInput: ["id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInMealCountOrderByAggregateInput: ["id", "foodId", "mealId", "quantity", "unitId"],
  FoodInMealAvgOrderByAggregateInput: ["id", "foodId", "mealId", "quantity", "unitId"],
  FoodInMealMaxOrderByAggregateInput: ["id", "foodId", "mealId", "quantity", "unitId"],
  FoodInMealMinOrderByAggregateInput: ["id", "foodId", "mealId", "quantity", "unitId"],
  FoodInMealSumOrderByAggregateInput: ["id", "foodId", "mealId", "quantity", "unitId"],
  UnitCountOrderByAggregateInput: ["id", "name", "shortname", "volume"],
  UnitAvgOrderByAggregateInput: ["id"],
  UnitMaxOrderByAggregateInput: ["id", "name", "shortname", "volume"],
  UnitMinOrderByAggregateInput: ["id", "name", "shortname", "volume"],
  UnitSumOrderByAggregateInput: ["id"],
  ProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  MealCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  WeighInCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  WorkoutCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  RecipeCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  ProfileUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  MealUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  WeighInUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  WorkoutUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  RecipeUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
  DecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutProfileNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutWeighInsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutWeighInsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutWorkoutsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutWorkoutsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutRecipesInput: ["create", "connectOrCreate", "connect"],
  FoodInRecipeCreateNestedManyWithoutRecipeInput: ["create", "connectOrCreate", "createMany", "connect"],
  RecipeInMealCreateNestedManyWithoutRecipeInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutRecipesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  FoodInRecipeUpdateManyWithoutRecipeNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  RecipeInMealUpdateManyWithoutRecipeNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutMealsInput: ["create", "connectOrCreate", "connect"],
  FoodInMealCreateNestedManyWithoutMealInput: ["create", "connectOrCreate", "createMany", "connect"],
  RecipeInMealCreateNestedManyWithoutMealInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumMealTypeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutMealsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  FoodInMealUpdateManyWithoutMealNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  RecipeInMealUpdateManyWithoutMealNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  RecipeCreateNestedOneWithoutMealsInput: ["create", "connectOrCreate", "connect"],
  MealCreateNestedOneWithoutRecipesInput: ["create", "connectOrCreate", "connect"],
  UnitCreateNestedOneWithoutMealRecipeInput: ["create", "connectOrCreate", "connect"],
  RecipeUpdateOneRequiredWithoutMealsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MealUpdateOneRequiredWithoutRecipesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UnitUpdateOneRequiredWithoutMealRecipeNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  FoodNutritionCreateNestedManyWithoutFoodInput: ["create", "connectOrCreate", "createMany", "connect"],
  FoodInMealCreateNestedManyWithoutFoodInput: ["create", "connectOrCreate", "createMany", "connect"],
  FoodInRecipeCreateNestedManyWithoutFoodInput: ["create", "connectOrCreate", "createMany", "connect"],
  FoodNutritionUpdateManyWithoutFoodNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FoodInMealUpdateManyWithoutFoodNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FoodInRecipeUpdateManyWithoutFoodNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FoodCreateNestedOneWithoutNutritionInput: ["create", "connectOrCreate", "connect"],
  UnitCreateNestedOneWithoutFoodNutritionInput: ["create", "connectOrCreate", "connect"],
  FoodUpdateOneRequiredWithoutNutritionNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UnitUpdateOneRequiredWithoutFoodNutritionNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  FoodCreateNestedOneWithoutRecipesInput: ["create", "connectOrCreate", "connect"],
  RecipeCreateNestedOneWithoutFoodsInput: ["create", "connectOrCreate", "connect"],
  UnitCreateNestedOneWithoutRecipeFoodsInput: ["create", "connectOrCreate", "connect"],
  FoodUpdateOneRequiredWithoutRecipesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  RecipeUpdateOneRequiredWithoutFoodsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UnitUpdateOneRequiredWithoutRecipeFoodsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  FoodCreateNestedOneWithoutMealsInput: ["create", "connectOrCreate", "connect"],
  MealCreateNestedOneWithoutFoodsInput: ["create", "connectOrCreate", "connect"],
  UnitCreateNestedOneWithoutMealFoodsInput: ["create", "connectOrCreate", "connect"],
  FoodUpdateOneRequiredWithoutMealsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MealUpdateOneRequiredWithoutFoodsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UnitUpdateOneRequiredWithoutMealFoodsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  FoodInMealCreateNestedManyWithoutUnitInput: ["create", "connectOrCreate", "createMany", "connect"],
  RecipeInMealCreateNestedManyWithoutUnitInput: ["create", "connectOrCreate", "createMany", "connect"],
  FoodInRecipeCreateNestedManyWithoutUnitInput: ["create", "connectOrCreate", "createMany", "connect"],
  FoodNutritionCreateNestedManyWithoutUnitInput: ["create", "connectOrCreate", "createMany", "connect"],
  FoodInMealUpdateManyWithoutUnitNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  RecipeInMealUpdateManyWithoutUnitNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FoodInRecipeUpdateManyWithoutUnitNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FoodNutritionUpdateManyWithoutUnitNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedDecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedDecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedEnumMealTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumMealTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ProfileCreateWithoutUserInput: ["firstName", "lastName", "calorieGoal", "weightGoal", "metric"],
  ProfileCreateOrConnectWithoutUserInput: ["where", "create"],
  MealCreateWithoutUserInput: ["mealType", "foods", "recipes"],
  MealCreateOrConnectWithoutUserInput: ["where", "create"],
  MealCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  WeighInCreateWithoutUserInput: ["weight", "createdAt"],
  WeighInCreateOrConnectWithoutUserInput: ["where", "create"],
  WeighInCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  WorkoutCreateWithoutUserInput: ["name", "calories"],
  WorkoutCreateOrConnectWithoutUserInput: ["where", "create"],
  WorkoutCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  RecipeCreateWithoutUserInput: ["name", "foods", "meals"],
  RecipeCreateOrConnectWithoutUserInput: ["where", "create"],
  RecipeCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ProfileUpsertWithoutUserInput: ["update", "create"],
  ProfileUpdateWithoutUserInput: ["firstName", "lastName", "calorieGoal", "weightGoal", "metric"],
  MealUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  MealUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  MealUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  MealScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "mealType"],
  WeighInUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  WeighInUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  WeighInUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  WeighInScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "weight", "createdAt"],
  WorkoutUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  WorkoutUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  WorkoutUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  WorkoutScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "name", "calories"],
  RecipeUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  RecipeUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  RecipeUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  RecipeScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "name"],
  UserCreateWithoutProfileInput: ["email", "password", "createdAt", "updatedAt", "meals", "weighIns", "workouts", "recipes"],
  UserCreateOrConnectWithoutProfileInput: ["where", "create"],
  UserUpsertWithoutProfileInput: ["update", "create"],
  UserUpdateWithoutProfileInput: ["email", "password", "createdAt", "updatedAt", "meals", "weighIns", "workouts", "recipes"],
  UserCreateWithoutWeighInsInput: ["email", "password", "createdAt", "updatedAt", "profile", "meals", "workouts", "recipes"],
  UserCreateOrConnectWithoutWeighInsInput: ["where", "create"],
  UserUpsertWithoutWeighInsInput: ["update", "create"],
  UserUpdateWithoutWeighInsInput: ["email", "password", "createdAt", "updatedAt", "profile", "meals", "workouts", "recipes"],
  UserCreateWithoutWorkoutsInput: ["email", "password", "createdAt", "updatedAt", "profile", "meals", "weighIns", "recipes"],
  UserCreateOrConnectWithoutWorkoutsInput: ["where", "create"],
  UserUpsertWithoutWorkoutsInput: ["update", "create"],
  UserUpdateWithoutWorkoutsInput: ["email", "password", "createdAt", "updatedAt", "profile", "meals", "weighIns", "recipes"],
  UserCreateWithoutRecipesInput: ["email", "password", "createdAt", "updatedAt", "profile", "meals", "weighIns", "workouts"],
  UserCreateOrConnectWithoutRecipesInput: ["where", "create"],
  FoodInRecipeCreateWithoutRecipeInput: ["quantity", "food", "unit"],
  FoodInRecipeCreateOrConnectWithoutRecipeInput: ["where", "create"],
  FoodInRecipeCreateManyRecipeInputEnvelope: ["data", "skipDuplicates"],
  RecipeInMealCreateWithoutRecipeInput: ["quantity", "meal", "unit"],
  RecipeInMealCreateOrConnectWithoutRecipeInput: ["where", "create"],
  RecipeInMealCreateManyRecipeInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutRecipesInput: ["update", "create"],
  UserUpdateWithoutRecipesInput: ["email", "password", "createdAt", "updatedAt", "profile", "meals", "weighIns", "workouts"],
  FoodInRecipeUpsertWithWhereUniqueWithoutRecipeInput: ["where", "update", "create"],
  FoodInRecipeUpdateWithWhereUniqueWithoutRecipeInput: ["where", "data"],
  FoodInRecipeUpdateManyWithWhereWithoutRecipeInput: ["where", "data"],
  FoodInRecipeScalarWhereInput: ["AND", "OR", "NOT", "id", "foodId", "recipeId", "quantity", "unitId"],
  RecipeInMealUpsertWithWhereUniqueWithoutRecipeInput: ["where", "update", "create"],
  RecipeInMealUpdateWithWhereUniqueWithoutRecipeInput: ["where", "data"],
  RecipeInMealUpdateManyWithWhereWithoutRecipeInput: ["where", "data"],
  RecipeInMealScalarWhereInput: ["AND", "OR", "NOT", "id", "recipeId", "mealId", "quantity", "unitId"],
  UserCreateWithoutMealsInput: ["email", "password", "createdAt", "updatedAt", "profile", "weighIns", "workouts", "recipes"],
  UserCreateOrConnectWithoutMealsInput: ["where", "create"],
  FoodInMealCreateWithoutMealInput: ["quantity", "food", "unit"],
  FoodInMealCreateOrConnectWithoutMealInput: ["where", "create"],
  FoodInMealCreateManyMealInputEnvelope: ["data", "skipDuplicates"],
  RecipeInMealCreateWithoutMealInput: ["quantity", "recipe", "unit"],
  RecipeInMealCreateOrConnectWithoutMealInput: ["where", "create"],
  RecipeInMealCreateManyMealInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutMealsInput: ["update", "create"],
  UserUpdateWithoutMealsInput: ["email", "password", "createdAt", "updatedAt", "profile", "weighIns", "workouts", "recipes"],
  FoodInMealUpsertWithWhereUniqueWithoutMealInput: ["where", "update", "create"],
  FoodInMealUpdateWithWhereUniqueWithoutMealInput: ["where", "data"],
  FoodInMealUpdateManyWithWhereWithoutMealInput: ["where", "data"],
  FoodInMealScalarWhereInput: ["AND", "OR", "NOT", "id", "foodId", "mealId", "quantity", "unitId"],
  RecipeInMealUpsertWithWhereUniqueWithoutMealInput: ["where", "update", "create"],
  RecipeInMealUpdateWithWhereUniqueWithoutMealInput: ["where", "data"],
  RecipeInMealUpdateManyWithWhereWithoutMealInput: ["where", "data"],
  RecipeCreateWithoutMealsInput: ["name", "user", "foods"],
  RecipeCreateOrConnectWithoutMealsInput: ["where", "create"],
  MealCreateWithoutRecipesInput: ["mealType", "user", "foods"],
  MealCreateOrConnectWithoutRecipesInput: ["where", "create"],
  UnitCreateWithoutMealRecipeInput: ["name", "shortname", "volume", "mealFoods", "recipeFoods", "foodNutrition"],
  UnitCreateOrConnectWithoutMealRecipeInput: ["where", "create"],
  RecipeUpsertWithoutMealsInput: ["update", "create"],
  RecipeUpdateWithoutMealsInput: ["name", "user", "foods"],
  MealUpsertWithoutRecipesInput: ["update", "create"],
  MealUpdateWithoutRecipesInput: ["mealType", "user", "foods"],
  UnitUpsertWithoutMealRecipeInput: ["update", "create"],
  UnitUpdateWithoutMealRecipeInput: ["name", "shortname", "volume", "mealFoods", "recipeFoods", "foodNutrition"],
  FoodNutritionCreateWithoutFoodInput: ["quantity", "calories", "protein", "fat", "carbs", "unit"],
  FoodNutritionCreateOrConnectWithoutFoodInput: ["where", "create"],
  FoodNutritionCreateManyFoodInputEnvelope: ["data", "skipDuplicates"],
  FoodInMealCreateWithoutFoodInput: ["quantity", "meal", "unit"],
  FoodInMealCreateOrConnectWithoutFoodInput: ["where", "create"],
  FoodInMealCreateManyFoodInputEnvelope: ["data", "skipDuplicates"],
  FoodInRecipeCreateWithoutFoodInput: ["quantity", "recipe", "unit"],
  FoodInRecipeCreateOrConnectWithoutFoodInput: ["where", "create"],
  FoodInRecipeCreateManyFoodInputEnvelope: ["data", "skipDuplicates"],
  FoodNutritionUpsertWithWhereUniqueWithoutFoodInput: ["where", "update", "create"],
  FoodNutritionUpdateWithWhereUniqueWithoutFoodInput: ["where", "data"],
  FoodNutritionUpdateManyWithWhereWithoutFoodInput: ["where", "data"],
  FoodNutritionScalarWhereInput: ["AND", "OR", "NOT", "id", "foodId", "quantity", "unitId", "calories", "protein", "fat", "carbs"],
  FoodInMealUpsertWithWhereUniqueWithoutFoodInput: ["where", "update", "create"],
  FoodInMealUpdateWithWhereUniqueWithoutFoodInput: ["where", "data"],
  FoodInMealUpdateManyWithWhereWithoutFoodInput: ["where", "data"],
  FoodInRecipeUpsertWithWhereUniqueWithoutFoodInput: ["where", "update", "create"],
  FoodInRecipeUpdateWithWhereUniqueWithoutFoodInput: ["where", "data"],
  FoodInRecipeUpdateManyWithWhereWithoutFoodInput: ["where", "data"],
  FoodCreateWithoutNutritionInput: ["name", "brand", "meals", "recipes"],
  FoodCreateOrConnectWithoutNutritionInput: ["where", "create"],
  UnitCreateWithoutFoodNutritionInput: ["name", "shortname", "volume", "mealFoods", "mealRecipe", "recipeFoods"],
  UnitCreateOrConnectWithoutFoodNutritionInput: ["where", "create"],
  FoodUpsertWithoutNutritionInput: ["update", "create"],
  FoodUpdateWithoutNutritionInput: ["name", "brand", "meals", "recipes"],
  UnitUpsertWithoutFoodNutritionInput: ["update", "create"],
  UnitUpdateWithoutFoodNutritionInput: ["name", "shortname", "volume", "mealFoods", "mealRecipe", "recipeFoods"],
  FoodCreateWithoutRecipesInput: ["name", "brand", "nutrition", "meals"],
  FoodCreateOrConnectWithoutRecipesInput: ["where", "create"],
  RecipeCreateWithoutFoodsInput: ["name", "user", "meals"],
  RecipeCreateOrConnectWithoutFoodsInput: ["where", "create"],
  UnitCreateWithoutRecipeFoodsInput: ["name", "shortname", "volume", "mealFoods", "mealRecipe", "foodNutrition"],
  UnitCreateOrConnectWithoutRecipeFoodsInput: ["where", "create"],
  FoodUpsertWithoutRecipesInput: ["update", "create"],
  FoodUpdateWithoutRecipesInput: ["name", "brand", "nutrition", "meals"],
  RecipeUpsertWithoutFoodsInput: ["update", "create"],
  RecipeUpdateWithoutFoodsInput: ["name", "user", "meals"],
  UnitUpsertWithoutRecipeFoodsInput: ["update", "create"],
  UnitUpdateWithoutRecipeFoodsInput: ["name", "shortname", "volume", "mealFoods", "mealRecipe", "foodNutrition"],
  FoodCreateWithoutMealsInput: ["name", "brand", "nutrition", "recipes"],
  FoodCreateOrConnectWithoutMealsInput: ["where", "create"],
  MealCreateWithoutFoodsInput: ["mealType", "user", "recipes"],
  MealCreateOrConnectWithoutFoodsInput: ["where", "create"],
  UnitCreateWithoutMealFoodsInput: ["name", "shortname", "volume", "mealRecipe", "recipeFoods", "foodNutrition"],
  UnitCreateOrConnectWithoutMealFoodsInput: ["where", "create"],
  FoodUpsertWithoutMealsInput: ["update", "create"],
  FoodUpdateWithoutMealsInput: ["name", "brand", "nutrition", "recipes"],
  MealUpsertWithoutFoodsInput: ["update", "create"],
  MealUpdateWithoutFoodsInput: ["mealType", "user", "recipes"],
  UnitUpsertWithoutMealFoodsInput: ["update", "create"],
  UnitUpdateWithoutMealFoodsInput: ["name", "shortname", "volume", "mealRecipe", "recipeFoods", "foodNutrition"],
  FoodInMealCreateWithoutUnitInput: ["quantity", "food", "meal"],
  FoodInMealCreateOrConnectWithoutUnitInput: ["where", "create"],
  FoodInMealCreateManyUnitInputEnvelope: ["data", "skipDuplicates"],
  RecipeInMealCreateWithoutUnitInput: ["quantity", "recipe", "meal"],
  RecipeInMealCreateOrConnectWithoutUnitInput: ["where", "create"],
  RecipeInMealCreateManyUnitInputEnvelope: ["data", "skipDuplicates"],
  FoodInRecipeCreateWithoutUnitInput: ["quantity", "food", "recipe"],
  FoodInRecipeCreateOrConnectWithoutUnitInput: ["where", "create"],
  FoodInRecipeCreateManyUnitInputEnvelope: ["data", "skipDuplicates"],
  FoodNutritionCreateWithoutUnitInput: ["quantity", "calories", "protein", "fat", "carbs", "food"],
  FoodNutritionCreateOrConnectWithoutUnitInput: ["where", "create"],
  FoodNutritionCreateManyUnitInputEnvelope: ["data", "skipDuplicates"],
  FoodInMealUpsertWithWhereUniqueWithoutUnitInput: ["where", "update", "create"],
  FoodInMealUpdateWithWhereUniqueWithoutUnitInput: ["where", "data"],
  FoodInMealUpdateManyWithWhereWithoutUnitInput: ["where", "data"],
  RecipeInMealUpsertWithWhereUniqueWithoutUnitInput: ["where", "update", "create"],
  RecipeInMealUpdateWithWhereUniqueWithoutUnitInput: ["where", "data"],
  RecipeInMealUpdateManyWithWhereWithoutUnitInput: ["where", "data"],
  FoodInRecipeUpsertWithWhereUniqueWithoutUnitInput: ["where", "update", "create"],
  FoodInRecipeUpdateWithWhereUniqueWithoutUnitInput: ["where", "data"],
  FoodInRecipeUpdateManyWithWhereWithoutUnitInput: ["where", "data"],
  FoodNutritionUpsertWithWhereUniqueWithoutUnitInput: ["where", "update", "create"],
  FoodNutritionUpdateWithWhereUniqueWithoutUnitInput: ["where", "data"],
  FoodNutritionUpdateManyWithWhereWithoutUnitInput: ["where", "data"],
  MealCreateManyUserInput: ["id", "mealType"],
  WeighInCreateManyUserInput: ["id", "weight", "createdAt"],
  WorkoutCreateManyUserInput: ["id", "name", "calories"],
  RecipeCreateManyUserInput: ["id", "name"],
  MealUpdateWithoutUserInput: ["mealType", "foods", "recipes"],
  WeighInUpdateWithoutUserInput: ["weight", "createdAt"],
  WorkoutUpdateWithoutUserInput: ["name", "calories"],
  RecipeUpdateWithoutUserInput: ["name", "foods", "meals"],
  FoodInRecipeCreateManyRecipeInput: ["id", "foodId", "quantity", "unitId"],
  RecipeInMealCreateManyRecipeInput: ["id", "mealId", "quantity", "unitId"],
  FoodInRecipeUpdateWithoutRecipeInput: ["quantity", "food", "unit"],
  RecipeInMealUpdateWithoutRecipeInput: ["quantity", "meal", "unit"],
  FoodInMealCreateManyMealInput: ["id", "foodId", "quantity", "unitId"],
  RecipeInMealCreateManyMealInput: ["id", "recipeId", "quantity", "unitId"],
  FoodInMealUpdateWithoutMealInput: ["quantity", "food", "unit"],
  RecipeInMealUpdateWithoutMealInput: ["quantity", "recipe", "unit"],
  FoodNutritionCreateManyFoodInput: ["id", "quantity", "unitId", "calories", "protein", "fat", "carbs"],
  FoodInMealCreateManyFoodInput: ["id", "mealId", "quantity", "unitId"],
  FoodInRecipeCreateManyFoodInput: ["id", "recipeId", "quantity", "unitId"],
  FoodNutritionUpdateWithoutFoodInput: ["quantity", "calories", "protein", "fat", "carbs", "unit"],
  FoodInMealUpdateWithoutFoodInput: ["quantity", "meal", "unit"],
  FoodInRecipeUpdateWithoutFoodInput: ["quantity", "recipe", "unit"],
  FoodInMealCreateManyUnitInput: ["id", "foodId", "mealId", "quantity"],
  RecipeInMealCreateManyUnitInput: ["id", "recipeId", "mealId", "quantity"],
  FoodInRecipeCreateManyUnitInput: ["id", "foodId", "recipeId", "quantity"],
  FoodNutritionCreateManyUnitInput: ["id", "foodId", "quantity", "calories", "protein", "fat", "carbs"],
  FoodInMealUpdateWithoutUnitInput: ["quantity", "food", "meal"],
  RecipeInMealUpdateWithoutUnitInput: ["quantity", "recipe", "meal"],
  FoodInRecipeUpdateWithoutUnitInput: ["quantity", "food", "recipe"],
  FoodNutritionUpdateWithoutUnitInput: ["quantity", "calories", "protein", "fat", "carbs", "food"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

