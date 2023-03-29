import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodInRecipeAvgAggregate } from "../outputs/FoodInRecipeAvgAggregate";
import { FoodInRecipeCountAggregate } from "../outputs/FoodInRecipeCountAggregate";
import { FoodInRecipeMaxAggregate } from "../outputs/FoodInRecipeMaxAggregate";
import { FoodInRecipeMinAggregate } from "../outputs/FoodInRecipeMinAggregate";
import { FoodInRecipeSumAggregate } from "../outputs/FoodInRecipeSumAggregate";

@TypeGraphQL.ObjectType("AggregateFoodInRecipe", {
  isAbstract: true
})
export class AggregateFoodInRecipe {
  @TypeGraphQL.Field(_type => FoodInRecipeCountAggregate, {
    nullable: true
  })
  _count!: FoodInRecipeCountAggregate | null;

  @TypeGraphQL.Field(_type => FoodInRecipeAvgAggregate, {
    nullable: true
  })
  _avg!: FoodInRecipeAvgAggregate | null;

  @TypeGraphQL.Field(_type => FoodInRecipeSumAggregate, {
    nullable: true
  })
  _sum!: FoodInRecipeSumAggregate | null;

  @TypeGraphQL.Field(_type => FoodInRecipeMinAggregate, {
    nullable: true
  })
  _min!: FoodInRecipeMinAggregate | null;

  @TypeGraphQL.Field(_type => FoodInRecipeMaxAggregate, {
    nullable: true
  })
  _max!: FoodInRecipeMaxAggregate | null;
}
