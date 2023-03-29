import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodNameBrandCompoundUniqueInput } from "../inputs/FoodNameBrandCompoundUniqueInput";

@TypeGraphQL.InputType("FoodWhereUniqueInput", {
  isAbstract: true
})
export class FoodWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => FoodNameBrandCompoundUniqueInput, {
    nullable: true
  })
  name_brand?: FoodNameBrandCompoundUniqueInput | undefined;
}
