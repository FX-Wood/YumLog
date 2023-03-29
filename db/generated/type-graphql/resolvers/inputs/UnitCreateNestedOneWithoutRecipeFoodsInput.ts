import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateOrConnectWithoutRecipeFoodsInput } from "../inputs/UnitCreateOrConnectWithoutRecipeFoodsInput";
import { UnitCreateWithoutRecipeFoodsInput } from "../inputs/UnitCreateWithoutRecipeFoodsInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitCreateNestedOneWithoutRecipeFoodsInput", {
  isAbstract: true
})
export class UnitCreateNestedOneWithoutRecipeFoodsInput {
  @TypeGraphQL.Field(_type => UnitCreateWithoutRecipeFoodsInput, {
    nullable: true
  })
  create?: UnitCreateWithoutRecipeFoodsInput | undefined;

  @TypeGraphQL.Field(_type => UnitCreateOrConnectWithoutRecipeFoodsInput, {
    nullable: true
  })
  connectOrCreate?: UnitCreateOrConnectWithoutRecipeFoodsInput | undefined;

  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: true
  })
  connect?: UnitWhereUniqueInput | undefined;
}
