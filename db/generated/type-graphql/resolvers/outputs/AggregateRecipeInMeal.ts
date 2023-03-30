import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeInMealAvgAggregate } from "../outputs/RecipeInMealAvgAggregate";
import { RecipeInMealCountAggregate } from "../outputs/RecipeInMealCountAggregate";
import { RecipeInMealMaxAggregate } from "../outputs/RecipeInMealMaxAggregate";
import { RecipeInMealMinAggregate } from "../outputs/RecipeInMealMinAggregate";
import { RecipeInMealSumAggregate } from "../outputs/RecipeInMealSumAggregate";

@TypeGraphQL.ObjectType("AggregateRecipeInMeal", {
  isAbstract: true
})
export class AggregateRecipeInMeal {
  @TypeGraphQL.Field(_type => RecipeInMealCountAggregate, {
    nullable: true
  })
  _count!: RecipeInMealCountAggregate | null;

  @TypeGraphQL.Field(_type => RecipeInMealAvgAggregate, {
    nullable: true
  })
  _avg!: RecipeInMealAvgAggregate | null;

  @TypeGraphQL.Field(_type => RecipeInMealSumAggregate, {
    nullable: true
  })
  _sum!: RecipeInMealSumAggregate | null;

  @TypeGraphQL.Field(_type => RecipeInMealMinAggregate, {
    nullable: true
  })
  _min!: RecipeInMealMinAggregate | null;

  @TypeGraphQL.Field(_type => RecipeInMealMaxAggregate, {
    nullable: true
  })
  _max!: RecipeInMealMaxAggregate | null;
}
