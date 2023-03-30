import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";

@TypeGraphQL.InputType("RecipeInMealUpdateManyMutationInput", {
  isAbstract: true
})
export class RecipeInMealUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  quantity?: DecimalFieldUpdateOperationsInput | undefined;
}
