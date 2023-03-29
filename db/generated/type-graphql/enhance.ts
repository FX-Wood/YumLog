import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Profile: crudResolvers.ProfileCrudResolver,
  WeighIn: crudResolvers.WeighInCrudResolver,
  Workout: crudResolvers.WorkoutCrudResolver,
  Recipe: crudResolvers.RecipeCrudResolver,
  Meal: crudResolvers.MealCrudResolver,
  Food: crudResolvers.FoodCrudResolver,
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
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
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
    profiles: actionResolvers.FindManyProfileResolver,
    profile: actionResolvers.FindUniqueProfileResolver,
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
    weighIns: actionResolvers.FindManyWeighInResolver,
    weighIn: actionResolvers.FindUniqueWeighInResolver,
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
    workouts: actionResolvers.FindManyWorkoutResolver,
    workout: actionResolvers.FindUniqueWorkoutResolver,
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
    recipes: actionResolvers.FindManyRecipeResolver,
    recipe: actionResolvers.FindUniqueRecipeResolver,
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
    meals: actionResolvers.FindManyMealResolver,
    meal: actionResolvers.FindUniqueMealResolver,
    groupByMeal: actionResolvers.GroupByMealResolver,
    updateManyMeal: actionResolvers.UpdateManyMealResolver,
    updateOneMeal: actionResolvers.UpdateOneMealResolver,
    upsertOneMeal: actionResolvers.UpsertOneMealResolver
  },
  Food: {
    aggregateFood: actionResolvers.AggregateFoodResolver,
    createManyFood: actionResolvers.CreateManyFoodResolver,
    createOneFood: actionResolvers.CreateOneFoodResolver,
    deleteManyFood: actionResolvers.DeleteManyFoodResolver,
    deleteOneFood: actionResolvers.DeleteOneFoodResolver,
    findFirstFood: actionResolvers.FindFirstFoodResolver,
    foods: actionResolvers.FindManyFoodResolver,
    food: actionResolvers.FindUniqueFoodResolver,
    groupByFood: actionResolvers.GroupByFoodResolver,
    updateManyFood: actionResolvers.UpdateManyFoodResolver,
    updateOneFood: actionResolvers.UpdateOneFoodResolver,
    upsertOneFood: actionResolvers.UpsertOneFoodResolver
  },
  FoodInRecipe: {
    aggregateFoodInRecipe: actionResolvers.AggregateFoodInRecipeResolver,
    createManyFoodInRecipe: actionResolvers.CreateManyFoodInRecipeResolver,
    createOneFoodInRecipe: actionResolvers.CreateOneFoodInRecipeResolver,
    deleteManyFoodInRecipe: actionResolvers.DeleteManyFoodInRecipeResolver,
    deleteOneFoodInRecipe: actionResolvers.DeleteOneFoodInRecipeResolver,
    findFirstFoodInRecipe: actionResolvers.FindFirstFoodInRecipeResolver,
    foodInRecipes: actionResolvers.FindManyFoodInRecipeResolver,
    foodInRecipe: actionResolvers.FindUniqueFoodInRecipeResolver,
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
    foodInMeals: actionResolvers.FindManyFoodInMealResolver,
    foodInMeal: actionResolvers.FindUniqueFoodInMealResolver,
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
    units: actionResolvers.FindManyUnitResolver,
    unit: actionResolvers.FindUniqueUnitResolver,
    groupByUnit: actionResolvers.GroupByUnitResolver,
    updateManyUnit: actionResolvers.UpdateManyUnitResolver,
    updateOneUnit: actionResolvers.UpdateOneUnitResolver,
    upsertOneUnit: actionResolvers.UpsertOneUnitResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "users", "user", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Profile: ["aggregateProfile", "createManyProfile", "createOneProfile", "deleteManyProfile", "deleteOneProfile", "findFirstProfile", "profiles", "profile", "groupByProfile", "updateManyProfile", "updateOneProfile", "upsertOneProfile"],
  WeighIn: ["aggregateWeighIn", "createManyWeighIn", "createOneWeighIn", "deleteManyWeighIn", "deleteOneWeighIn", "findFirstWeighIn", "weighIns", "weighIn", "groupByWeighIn", "updateManyWeighIn", "updateOneWeighIn", "upsertOneWeighIn"],
  Workout: ["aggregateWorkout", "createManyWorkout", "createOneWorkout", "deleteManyWorkout", "deleteOneWorkout", "findFirstWorkout", "workouts", "workout", "groupByWorkout", "updateManyWorkout", "updateOneWorkout", "upsertOneWorkout"],
  Recipe: ["aggregateRecipe", "createManyRecipe", "createOneRecipe", "deleteManyRecipe", "deleteOneRecipe", "findFirstRecipe", "recipes", "recipe", "groupByRecipe", "updateManyRecipe", "updateOneRecipe", "upsertOneRecipe"],
  Meal: ["aggregateMeal", "createManyMeal", "createOneMeal", "deleteManyMeal", "deleteOneMeal", "findFirstMeal", "meals", "meal", "groupByMeal", "updateManyMeal", "updateOneMeal", "upsertOneMeal"],
  Food: ["aggregateFood", "createManyFood", "createOneFood", "deleteManyFood", "deleteOneFood", "findFirstFood", "foods", "food", "groupByFood", "updateManyFood", "updateOneFood", "upsertOneFood"],
  FoodInRecipe: ["aggregateFoodInRecipe", "createManyFoodInRecipe", "createOneFoodInRecipe", "deleteManyFoodInRecipe", "deleteOneFoodInRecipe", "findFirstFoodInRecipe", "foodInRecipes", "foodInRecipe", "groupByFoodInRecipe", "updateManyFoodInRecipe", "updateOneFoodInRecipe", "upsertOneFoodInRecipe"],
  FoodInMeal: ["aggregateFoodInMeal", "createManyFoodInMeal", "createOneFoodInMeal", "deleteManyFoodInMeal", "deleteOneFoodInMeal", "findFirstFoodInMeal", "foodInMeals", "foodInMeal", "groupByFoodInMeal", "updateManyFoodInMeal", "updateOneFoodInMeal", "upsertOneFoodInMeal"],
  Unit: ["aggregateUnit", "createManyUnit", "createOneUnit", "deleteManyUnit", "deleteOneUnit", "findFirstUnit", "units", "unit", "groupByUnit", "updateManyUnit", "updateOneUnit", "upsertOneUnit"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
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
  FindManyProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProfileArgs: ["where"],
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
  FindManyWeighInArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWeighInArgs: ["where"],
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
  FindManyWorkoutArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWorkoutArgs: ["where"],
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
  FindManyRecipeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueRecipeArgs: ["where"],
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
  FindManyMealArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMealArgs: ["where"],
  GroupByMealArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMealArgs: ["data", "where"],
  UpdateOneMealArgs: ["data", "where"],
  UpsertOneMealArgs: ["where", "create", "update"],
  AggregateFoodArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyFoodArgs: ["data", "skipDuplicates"],
  CreateOneFoodArgs: ["data"],
  DeleteManyFoodArgs: ["where"],
  DeleteOneFoodArgs: ["where"],
  FindFirstFoodArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFoodArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueFoodArgs: ["where"],
  GroupByFoodArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyFoodArgs: ["data", "where"],
  UpdateOneFoodArgs: ["data", "where"],
  UpsertOneFoodArgs: ["where", "create", "update"],
  AggregateFoodInRecipeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyFoodInRecipeArgs: ["data", "skipDuplicates"],
  CreateOneFoodInRecipeArgs: ["data"],
  DeleteManyFoodInRecipeArgs: ["where"],
  DeleteOneFoodInRecipeArgs: ["where"],
  FindFirstFoodInRecipeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFoodInRecipeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueFoodInRecipeArgs: ["where"],
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
  FindManyFoodInMealArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueFoodInMealArgs: ["where"],
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
  FindManyUnitArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUnitArgs: ["where"],
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
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

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
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
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
  Food: relationResolvers.FoodRelationsResolver,
  FoodInRecipe: relationResolvers.FoodInRecipeRelationsResolver,
  FoodInMeal: relationResolvers.FoodInMealRelationsResolver,
  Unit: relationResolvers.UnitRelationsResolver
};
const relationResolversInfo = {
  User: ["profile", "meals", "weighIns", "workouts", "recipes"],
  Profile: ["user"],
  WeighIn: ["user"],
  Workout: ["user"],
  Recipe: ["user", "foods"],
  Meal: ["user", "foods"],
  Food: ["meals", "recipes"],
  FoodInRecipe: ["food", "recipe", "unit"],
  FoodInMeal: ["food", "meal", "unit"],
  Unit: ["mealFoods", "recipeFoods"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

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
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

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
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
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
  Food: ["id", "name", "brand", "calories", "protein", "fat", "carbs"],
  FoodInRecipe: ["id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInMeal: ["id", "foodId", "mealId", "quantity", "unitId"],
  Unit: ["id", "name", "abbreviation"]
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
  AggregateFood: ["_count", "_avg", "_sum", "_min", "_max"],
  FoodGroupBy: ["id", "name", "brand", "calories", "protein", "fat", "carbs", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFoodInRecipe: ["_count", "_avg", "_sum", "_min", "_max"],
  FoodInRecipeGroupBy: ["id", "foodId", "recipeId", "quantity", "unitId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFoodInMeal: ["_count", "_avg", "_sum", "_min", "_max"],
  FoodInMealGroupBy: ["id", "foodId", "mealId", "quantity", "unitId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUnit: ["_count", "_avg", "_sum", "_min", "_max"],
  UnitGroupBy: ["id", "name", "abbreviation", "_count", "_avg", "_sum", "_min", "_max"],
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
  RecipeCount: ["foods"],
  RecipeCountAggregate: ["id", "userId", "name", "_all"],
  RecipeAvgAggregate: ["id", "userId"],
  RecipeSumAggregate: ["id", "userId"],
  RecipeMinAggregate: ["id", "userId", "name"],
  RecipeMaxAggregate: ["id", "userId", "name"],
  MealCount: ["foods"],
  MealCountAggregate: ["id", "userId", "mealType", "_all"],
  MealAvgAggregate: ["id", "userId"],
  MealSumAggregate: ["id", "userId"],
  MealMinAggregate: ["id", "userId", "mealType"],
  MealMaxAggregate: ["id", "userId", "mealType"],
  FoodCount: ["meals", "recipes"],
  FoodCountAggregate: ["id", "name", "brand", "calories", "protein", "fat", "carbs", "_all"],
  FoodAvgAggregate: ["id", "calories", "protein", "fat", "carbs"],
  FoodSumAggregate: ["id", "calories", "protein", "fat", "carbs"],
  FoodMinAggregate: ["id", "name", "brand", "calories", "protein", "fat", "carbs"],
  FoodMaxAggregate: ["id", "name", "brand", "calories", "protein", "fat", "carbs"],
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
  UnitCount: ["mealFoods", "recipeFoods"],
  UnitCountAggregate: ["id", "name", "abbreviation", "_all"],
  UnitAvgAggregate: ["id"],
  UnitSumAggregate: ["id"],
  UnitMinAggregate: ["id", "name", "abbreviation"],
  UnitMaxAggregate: ["id", "name", "abbreviation"]
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
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "password", "profile", "meals", "weighIns", "workouts", "recipes", "createdAt", "updatedAt"],
  UserOrderByWithRelationInput: ["id", "email", "password", "profile", "meals", "weighIns", "workouts", "recipes", "createdAt", "updatedAt"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "email", "password", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "password", "createdAt", "updatedAt"],
  ProfileWhereInput: ["AND", "OR", "NOT", "id", "user", "userId", "firstName", "lastName", "calorieGoal", "weightGoal", "metric"],
  ProfileOrderByWithRelationInput: ["id", "user", "userId", "firstName", "lastName", "calorieGoal", "weightGoal", "metric"],
  ProfileWhereUniqueInput: ["id", "userId"],
  ProfileOrderByWithAggregationInput: ["id", "userId", "firstName", "lastName", "calorieGoal", "weightGoal", "metric", "_count", "_avg", "_max", "_min", "_sum"],
  ProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "firstName", "lastName", "calorieGoal", "weightGoal", "metric"],
  WeighInWhereInput: ["AND", "OR", "NOT", "id", "user", "userId", "weight", "createdAt"],
  WeighInOrderByWithRelationInput: ["id", "user", "userId", "weight", "createdAt"],
  WeighInWhereUniqueInput: ["id"],
  WeighInOrderByWithAggregationInput: ["id", "userId", "weight", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  WeighInScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "weight", "createdAt"],
  WorkoutWhereInput: ["AND", "OR", "NOT", "id", "user", "userId", "name", "calories"],
  WorkoutOrderByWithRelationInput: ["id", "user", "userId", "name", "calories"],
  WorkoutWhereUniqueInput: ["id"],
  WorkoutOrderByWithAggregationInput: ["id", "userId", "name", "calories", "_count", "_avg", "_max", "_min", "_sum"],
  WorkoutScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "name", "calories"],
  RecipeWhereInput: ["AND", "OR", "NOT", "id", "user", "userId", "name", "foods"],
  RecipeOrderByWithRelationInput: ["id", "user", "userId", "name", "foods"],
  RecipeWhereUniqueInput: ["id"],
  RecipeOrderByWithAggregationInput: ["id", "userId", "name", "_count", "_avg", "_max", "_min", "_sum"],
  RecipeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "name"],
  MealWhereInput: ["AND", "OR", "NOT", "id", "user", "userId", "mealType", "foods"],
  MealOrderByWithRelationInput: ["id", "user", "userId", "mealType", "foods"],
  MealWhereUniqueInput: ["id"],
  MealOrderByWithAggregationInput: ["id", "userId", "mealType", "_count", "_avg", "_max", "_min", "_sum"],
  MealScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "mealType"],
  FoodWhereInput: ["AND", "OR", "NOT", "id", "name", "brand", "calories", "protein", "fat", "carbs", "meals", "recipes"],
  FoodOrderByWithRelationInput: ["id", "name", "brand", "calories", "protein", "fat", "carbs", "meals", "recipes"],
  FoodWhereUniqueInput: ["id", "name_brand"],
  FoodOrderByWithAggregationInput: ["id", "name", "brand", "calories", "protein", "fat", "carbs", "_count", "_avg", "_max", "_min", "_sum"],
  FoodScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "brand", "calories", "protein", "fat", "carbs"],
  FoodInRecipeWhereInput: ["AND", "OR", "NOT", "id", "food", "foodId", "recipe", "recipeId", "quantity", "unit", "unitId"],
  FoodInRecipeOrderByWithRelationInput: ["id", "food", "foodId", "recipe", "recipeId", "quantity", "unit", "unitId"],
  FoodInRecipeWhereUniqueInput: ["id"],
  FoodInRecipeOrderByWithAggregationInput: ["id", "foodId", "recipeId", "quantity", "unitId", "_count", "_avg", "_max", "_min", "_sum"],
  FoodInRecipeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInMealWhereInput: ["AND", "OR", "NOT", "id", "food", "foodId", "meal", "mealId", "quantity", "unit", "unitId"],
  FoodInMealOrderByWithRelationInput: ["id", "food", "foodId", "meal", "mealId", "quantity", "unit", "unitId"],
  FoodInMealWhereUniqueInput: ["id"],
  FoodInMealOrderByWithAggregationInput: ["id", "foodId", "mealId", "quantity", "unitId", "_count", "_avg", "_max", "_min", "_sum"],
  FoodInMealScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "foodId", "mealId", "quantity", "unitId"],
  UnitWhereInput: ["AND", "OR", "NOT", "id", "name", "abbreviation", "mealFoods", "recipeFoods"],
  UnitOrderByWithRelationInput: ["id", "name", "abbreviation", "mealFoods", "recipeFoods"],
  UnitWhereUniqueInput: ["id"],
  UnitOrderByWithAggregationInput: ["id", "name", "abbreviation", "_count", "_avg", "_max", "_min", "_sum"],
  UnitScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "abbreviation"],
  UserCreateInput: ["email", "password", "profile", "meals", "weighIns", "workouts", "recipes", "createdAt", "updatedAt"],
  UserUpdateInput: ["email", "password", "profile", "meals", "weighIns", "workouts", "recipes", "createdAt", "updatedAt"],
  UserCreateManyInput: ["id", "email", "password", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["email", "password", "createdAt", "updatedAt"],
  ProfileCreateInput: ["user", "firstName", "lastName", "calorieGoal", "weightGoal", "metric"],
  ProfileUpdateInput: ["user", "firstName", "lastName", "calorieGoal", "weightGoal", "metric"],
  ProfileCreateManyInput: ["id", "userId", "firstName", "lastName", "calorieGoal", "weightGoal", "metric"],
  ProfileUpdateManyMutationInput: ["firstName", "lastName", "calorieGoal", "weightGoal", "metric"],
  WeighInCreateInput: ["user", "weight", "createdAt"],
  WeighInUpdateInput: ["user", "weight", "createdAt"],
  WeighInCreateManyInput: ["id", "userId", "weight", "createdAt"],
  WeighInUpdateManyMutationInput: ["weight", "createdAt"],
  WorkoutCreateInput: ["user", "name", "calories"],
  WorkoutUpdateInput: ["user", "name", "calories"],
  WorkoutCreateManyInput: ["id", "userId", "name", "calories"],
  WorkoutUpdateManyMutationInput: ["name", "calories"],
  RecipeCreateInput: ["user", "name", "foods"],
  RecipeUpdateInput: ["user", "name", "foods"],
  RecipeCreateManyInput: ["id", "userId", "name"],
  RecipeUpdateManyMutationInput: ["name"],
  MealCreateInput: ["user", "mealType", "foods"],
  MealUpdateInput: ["user", "mealType", "foods"],
  MealCreateManyInput: ["id", "userId", "mealType"],
  MealUpdateManyMutationInput: ["mealType"],
  FoodCreateInput: ["name", "brand", "calories", "protein", "fat", "carbs", "meals", "recipes"],
  FoodUpdateInput: ["name", "brand", "calories", "protein", "fat", "carbs", "meals", "recipes"],
  FoodCreateManyInput: ["id", "name", "brand", "calories", "protein", "fat", "carbs"],
  FoodUpdateManyMutationInput: ["name", "brand", "calories", "protein", "fat", "carbs"],
  FoodInRecipeCreateInput: ["food", "recipe", "quantity", "unit"],
  FoodInRecipeUpdateInput: ["food", "recipe", "quantity", "unit"],
  FoodInRecipeCreateManyInput: ["id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInRecipeUpdateManyMutationInput: ["quantity"],
  FoodInMealCreateInput: ["food", "meal", "quantity", "unit"],
  FoodInMealUpdateInput: ["food", "meal", "quantity", "unit"],
  FoodInMealCreateManyInput: ["id", "foodId", "mealId", "quantity", "unitId"],
  FoodInMealUpdateManyMutationInput: ["quantity"],
  UnitCreateInput: ["name", "abbreviation", "mealFoods", "recipeFoods"],
  UnitUpdateInput: ["name", "abbreviation", "mealFoods", "recipeFoods"],
  UnitCreateManyInput: ["id", "name", "abbreviation"],
  UnitUpdateManyMutationInput: ["name", "abbreviation"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  ProfileRelationFilter: ["is", "isNot"],
  MealListRelationFilter: ["every", "some", "none"],
  WeighInListRelationFilter: ["every", "some", "none"],
  WorkoutListRelationFilter: ["every", "some", "none"],
  RecipeListRelationFilter: ["every", "some", "none"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
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
  UserRelationFilter: ["is", "isNot"],
  DecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
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
  FoodInRecipeOrderByRelationAggregateInput: ["_count"],
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
  FoodNameBrandCompoundUniqueInput: ["name", "brand"],
  FoodCountOrderByAggregateInput: ["id", "name", "brand", "calories", "protein", "fat", "carbs"],
  FoodAvgOrderByAggregateInput: ["id", "calories", "protein", "fat", "carbs"],
  FoodMaxOrderByAggregateInput: ["id", "name", "brand", "calories", "protein", "fat", "carbs"],
  FoodMinOrderByAggregateInput: ["id", "name", "brand", "calories", "protein", "fat", "carbs"],
  FoodSumOrderByAggregateInput: ["id", "calories", "protein", "fat", "carbs"],
  FoodRelationFilter: ["is", "isNot"],
  RecipeRelationFilter: ["is", "isNot"],
  UnitRelationFilter: ["is", "isNot"],
  FoodInRecipeCountOrderByAggregateInput: ["id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInRecipeAvgOrderByAggregateInput: ["id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInRecipeMaxOrderByAggregateInput: ["id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInRecipeMinOrderByAggregateInput: ["id", "foodId", "recipeId", "quantity", "unitId"],
  FoodInRecipeSumOrderByAggregateInput: ["id", "foodId", "recipeId", "quantity", "unitId"],
  MealRelationFilter: ["is", "isNot"],
  FoodInMealCountOrderByAggregateInput: ["id", "foodId", "mealId", "quantity", "unitId"],
  FoodInMealAvgOrderByAggregateInput: ["id", "foodId", "mealId", "quantity", "unitId"],
  FoodInMealMaxOrderByAggregateInput: ["id", "foodId", "mealId", "quantity", "unitId"],
  FoodInMealMinOrderByAggregateInput: ["id", "foodId", "mealId", "quantity", "unitId"],
  FoodInMealSumOrderByAggregateInput: ["id", "foodId", "mealId", "quantity", "unitId"],
  UnitCountOrderByAggregateInput: ["id", "name", "abbreviation"],
  UnitAvgOrderByAggregateInput: ["id"],
  UnitMaxOrderByAggregateInput: ["id", "name", "abbreviation"],
  UnitMinOrderByAggregateInput: ["id", "name", "abbreviation"],
  UnitSumOrderByAggregateInput: ["id"],
  ProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  MealCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  WeighInCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  WorkoutCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  RecipeCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  ProfileUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  MealUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  WeighInUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  WorkoutUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  RecipeUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutProfileNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  DecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserCreateNestedOneWithoutWeighInsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutWeighInsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutWorkoutsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutWorkoutsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutRecipesInput: ["create", "connectOrCreate", "connect"],
  FoodInRecipeCreateNestedManyWithoutRecipeInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutRecipesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  FoodInRecipeUpdateManyWithoutRecipeNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutMealsInput: ["create", "connectOrCreate", "connect"],
  FoodInMealCreateNestedManyWithoutMealInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutMealsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  EnumMealTypeFieldUpdateOperationsInput: ["set"],
  FoodInMealUpdateManyWithoutMealNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FoodInMealCreateNestedManyWithoutFoodInput: ["create", "connectOrCreate", "createMany", "connect"],
  FoodInRecipeCreateNestedManyWithoutFoodInput: ["create", "connectOrCreate", "createMany", "connect"],
  FoodInMealUpdateManyWithoutFoodNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FoodInRecipeUpdateManyWithoutFoodNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
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
  FoodInRecipeCreateNestedManyWithoutUnitInput: ["create", "connectOrCreate", "createMany", "connect"],
  FoodInMealUpdateManyWithoutUnitNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FoodInRecipeUpdateManyWithoutUnitNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
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
  MealCreateWithoutUserInput: ["mealType", "foods"],
  MealCreateOrConnectWithoutUserInput: ["where", "create"],
  MealCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  WeighInCreateWithoutUserInput: ["weight", "createdAt"],
  WeighInCreateOrConnectWithoutUserInput: ["where", "create"],
  WeighInCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  WorkoutCreateWithoutUserInput: ["name", "calories"],
  WorkoutCreateOrConnectWithoutUserInput: ["where", "create"],
  WorkoutCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  RecipeCreateWithoutUserInput: ["name", "foods"],
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
  UserCreateWithoutProfileInput: ["email", "password", "meals", "weighIns", "workouts", "recipes", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutProfileInput: ["where", "create"],
  UserUpsertWithoutProfileInput: ["update", "create"],
  UserUpdateWithoutProfileInput: ["email", "password", "meals", "weighIns", "workouts", "recipes", "createdAt", "updatedAt"],
  UserCreateWithoutWeighInsInput: ["email", "password", "profile", "meals", "workouts", "recipes", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutWeighInsInput: ["where", "create"],
  UserUpsertWithoutWeighInsInput: ["update", "create"],
  UserUpdateWithoutWeighInsInput: ["email", "password", "profile", "meals", "workouts", "recipes", "createdAt", "updatedAt"],
  UserCreateWithoutWorkoutsInput: ["email", "password", "profile", "meals", "weighIns", "recipes", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutWorkoutsInput: ["where", "create"],
  UserUpsertWithoutWorkoutsInput: ["update", "create"],
  UserUpdateWithoutWorkoutsInput: ["email", "password", "profile", "meals", "weighIns", "recipes", "createdAt", "updatedAt"],
  UserCreateWithoutRecipesInput: ["email", "password", "profile", "meals", "weighIns", "workouts", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutRecipesInput: ["where", "create"],
  FoodInRecipeCreateWithoutRecipeInput: ["food", "quantity", "unit"],
  FoodInRecipeCreateOrConnectWithoutRecipeInput: ["where", "create"],
  FoodInRecipeCreateManyRecipeInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutRecipesInput: ["update", "create"],
  UserUpdateWithoutRecipesInput: ["email", "password", "profile", "meals", "weighIns", "workouts", "createdAt", "updatedAt"],
  FoodInRecipeUpsertWithWhereUniqueWithoutRecipeInput: ["where", "update", "create"],
  FoodInRecipeUpdateWithWhereUniqueWithoutRecipeInput: ["where", "data"],
  FoodInRecipeUpdateManyWithWhereWithoutRecipeInput: ["where", "data"],
  FoodInRecipeScalarWhereInput: ["AND", "OR", "NOT", "id", "foodId", "recipeId", "quantity", "unitId"],
  UserCreateWithoutMealsInput: ["email", "password", "profile", "weighIns", "workouts", "recipes", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutMealsInput: ["where", "create"],
  FoodInMealCreateWithoutMealInput: ["food", "quantity", "unit"],
  FoodInMealCreateOrConnectWithoutMealInput: ["where", "create"],
  FoodInMealCreateManyMealInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutMealsInput: ["update", "create"],
  UserUpdateWithoutMealsInput: ["email", "password", "profile", "weighIns", "workouts", "recipes", "createdAt", "updatedAt"],
  FoodInMealUpsertWithWhereUniqueWithoutMealInput: ["where", "update", "create"],
  FoodInMealUpdateWithWhereUniqueWithoutMealInput: ["where", "data"],
  FoodInMealUpdateManyWithWhereWithoutMealInput: ["where", "data"],
  FoodInMealScalarWhereInput: ["AND", "OR", "NOT", "id", "foodId", "mealId", "quantity", "unitId"],
  FoodInMealCreateWithoutFoodInput: ["meal", "quantity", "unit"],
  FoodInMealCreateOrConnectWithoutFoodInput: ["where", "create"],
  FoodInMealCreateManyFoodInputEnvelope: ["data", "skipDuplicates"],
  FoodInRecipeCreateWithoutFoodInput: ["recipe", "quantity", "unit"],
  FoodInRecipeCreateOrConnectWithoutFoodInput: ["where", "create"],
  FoodInRecipeCreateManyFoodInputEnvelope: ["data", "skipDuplicates"],
  FoodInMealUpsertWithWhereUniqueWithoutFoodInput: ["where", "update", "create"],
  FoodInMealUpdateWithWhereUniqueWithoutFoodInput: ["where", "data"],
  FoodInMealUpdateManyWithWhereWithoutFoodInput: ["where", "data"],
  FoodInRecipeUpsertWithWhereUniqueWithoutFoodInput: ["where", "update", "create"],
  FoodInRecipeUpdateWithWhereUniqueWithoutFoodInput: ["where", "data"],
  FoodInRecipeUpdateManyWithWhereWithoutFoodInput: ["where", "data"],
  FoodCreateWithoutRecipesInput: ["name", "brand", "calories", "protein", "fat", "carbs", "meals"],
  FoodCreateOrConnectWithoutRecipesInput: ["where", "create"],
  RecipeCreateWithoutFoodsInput: ["user", "name"],
  RecipeCreateOrConnectWithoutFoodsInput: ["where", "create"],
  UnitCreateWithoutRecipeFoodsInput: ["name", "abbreviation", "mealFoods"],
  UnitCreateOrConnectWithoutRecipeFoodsInput: ["where", "create"],
  FoodUpsertWithoutRecipesInput: ["update", "create"],
  FoodUpdateWithoutRecipesInput: ["name", "brand", "calories", "protein", "fat", "carbs", "meals"],
  RecipeUpsertWithoutFoodsInput: ["update", "create"],
  RecipeUpdateWithoutFoodsInput: ["user", "name"],
  UnitUpsertWithoutRecipeFoodsInput: ["update", "create"],
  UnitUpdateWithoutRecipeFoodsInput: ["name", "abbreviation", "mealFoods"],
  FoodCreateWithoutMealsInput: ["name", "brand", "calories", "protein", "fat", "carbs", "recipes"],
  FoodCreateOrConnectWithoutMealsInput: ["where", "create"],
  MealCreateWithoutFoodsInput: ["user", "mealType"],
  MealCreateOrConnectWithoutFoodsInput: ["where", "create"],
  UnitCreateWithoutMealFoodsInput: ["name", "abbreviation", "recipeFoods"],
  UnitCreateOrConnectWithoutMealFoodsInput: ["where", "create"],
  FoodUpsertWithoutMealsInput: ["update", "create"],
  FoodUpdateWithoutMealsInput: ["name", "brand", "calories", "protein", "fat", "carbs", "recipes"],
  MealUpsertWithoutFoodsInput: ["update", "create"],
  MealUpdateWithoutFoodsInput: ["user", "mealType"],
  UnitUpsertWithoutMealFoodsInput: ["update", "create"],
  UnitUpdateWithoutMealFoodsInput: ["name", "abbreviation", "recipeFoods"],
  FoodInMealCreateWithoutUnitInput: ["food", "meal", "quantity"],
  FoodInMealCreateOrConnectWithoutUnitInput: ["where", "create"],
  FoodInMealCreateManyUnitInputEnvelope: ["data", "skipDuplicates"],
  FoodInRecipeCreateWithoutUnitInput: ["food", "recipe", "quantity"],
  FoodInRecipeCreateOrConnectWithoutUnitInput: ["where", "create"],
  FoodInRecipeCreateManyUnitInputEnvelope: ["data", "skipDuplicates"],
  FoodInMealUpsertWithWhereUniqueWithoutUnitInput: ["where", "update", "create"],
  FoodInMealUpdateWithWhereUniqueWithoutUnitInput: ["where", "data"],
  FoodInMealUpdateManyWithWhereWithoutUnitInput: ["where", "data"],
  FoodInRecipeUpsertWithWhereUniqueWithoutUnitInput: ["where", "update", "create"],
  FoodInRecipeUpdateWithWhereUniqueWithoutUnitInput: ["where", "data"],
  FoodInRecipeUpdateManyWithWhereWithoutUnitInput: ["where", "data"],
  MealCreateManyUserInput: ["id", "mealType"],
  WeighInCreateManyUserInput: ["id", "weight", "createdAt"],
  WorkoutCreateManyUserInput: ["id", "name", "calories"],
  RecipeCreateManyUserInput: ["id", "name"],
  MealUpdateWithoutUserInput: ["mealType", "foods"],
  WeighInUpdateWithoutUserInput: ["weight", "createdAt"],
  WorkoutUpdateWithoutUserInput: ["name", "calories"],
  RecipeUpdateWithoutUserInput: ["name", "foods"],
  FoodInRecipeCreateManyRecipeInput: ["id", "foodId", "quantity", "unitId"],
  FoodInRecipeUpdateWithoutRecipeInput: ["food", "quantity", "unit"],
  FoodInMealCreateManyMealInput: ["id", "foodId", "quantity", "unitId"],
  FoodInMealUpdateWithoutMealInput: ["food", "quantity", "unit"],
  FoodInMealCreateManyFoodInput: ["id", "mealId", "quantity", "unitId"],
  FoodInRecipeCreateManyFoodInput: ["id", "recipeId", "quantity", "unitId"],
  FoodInMealUpdateWithoutFoodInput: ["meal", "quantity", "unit"],
  FoodInRecipeUpdateWithoutFoodInput: ["recipe", "quantity", "unit"],
  FoodInMealCreateManyUnitInput: ["id", "foodId", "mealId", "quantity"],
  FoodInRecipeCreateManyUnitInput: ["id", "foodId", "recipeId", "quantity"],
  FoodInMealUpdateWithoutUnitInput: ["food", "meal", "quantity"],
  FoodInRecipeUpdateWithoutUnitInput: ["food", "recipe", "quantity"]
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

