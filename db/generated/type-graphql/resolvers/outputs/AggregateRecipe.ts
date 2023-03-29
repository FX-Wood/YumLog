import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeAvgAggregate } from "../outputs/RecipeAvgAggregate";
import { RecipeCountAggregate } from "../outputs/RecipeCountAggregate";
import { RecipeMaxAggregate } from "../outputs/RecipeMaxAggregate";
import { RecipeMinAggregate } from "../outputs/RecipeMinAggregate";
import { RecipeSumAggregate } from "../outputs/RecipeSumAggregate";

@TypeGraphQL.ObjectType("AggregateRecipe", {
  isAbstract: true
})
export class AggregateRecipe {
  @TypeGraphQL.Field(_type => RecipeCountAggregate, {
    nullable: true
  })
  _count!: RecipeCountAggregate | null;

  @TypeGraphQL.Field(_type => RecipeAvgAggregate, {
    nullable: true
  })
  _avg!: RecipeAvgAggregate | null;

  @TypeGraphQL.Field(_type => RecipeSumAggregate, {
    nullable: true
  })
  _sum!: RecipeSumAggregate | null;

  @TypeGraphQL.Field(_type => RecipeMinAggregate, {
    nullable: true
  })
  _min!: RecipeMinAggregate | null;

  @TypeGraphQL.Field(_type => RecipeMaxAggregate, {
    nullable: true
  })
  _max!: RecipeMaxAggregate | null;
}
