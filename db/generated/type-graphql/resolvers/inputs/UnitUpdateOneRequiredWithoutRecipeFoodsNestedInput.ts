import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateOrConnectWithoutRecipeFoodsInput } from "../inputs/UnitCreateOrConnectWithoutRecipeFoodsInput";
import { UnitCreateWithoutRecipeFoodsInput } from "../inputs/UnitCreateWithoutRecipeFoodsInput";
import { UnitUpdateWithoutRecipeFoodsInput } from "../inputs/UnitUpdateWithoutRecipeFoodsInput";
import { UnitUpsertWithoutRecipeFoodsInput } from "../inputs/UnitUpsertWithoutRecipeFoodsInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitUpdateOneRequiredWithoutRecipeFoodsNestedInput", {
  isAbstract: true
})
export class UnitUpdateOneRequiredWithoutRecipeFoodsNestedInput {
  @TypeGraphQL.Field(_type => UnitCreateWithoutRecipeFoodsInput, {
    nullable: true
  })
  create?: UnitCreateWithoutRecipeFoodsInput | undefined;

  @TypeGraphQL.Field(_type => UnitCreateOrConnectWithoutRecipeFoodsInput, {
    nullable: true
  })
  connectOrCreate?: UnitCreateOrConnectWithoutRecipeFoodsInput | undefined;

  @TypeGraphQL.Field(_type => UnitUpsertWithoutRecipeFoodsInput, {
    nullable: true
  })
  upsert?: UnitUpsertWithoutRecipeFoodsInput | undefined;

  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: true
  })
  connect?: UnitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UnitUpdateWithoutRecipeFoodsInput, {
    nullable: true
  })
  update?: UnitUpdateWithoutRecipeFoodsInput | undefined;
}
