import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("MetricSumAggregate", {
  isAbstract: true,
})
export class MetricSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;
}
