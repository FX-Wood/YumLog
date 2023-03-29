import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodCreateManyInput } from "../../../inputs/FoodCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFoodArgs {
  @TypeGraphQL.Field(_type => [FoodCreateManyInput], {
    nullable: false
  })
  data!: FoodCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
