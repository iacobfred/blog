import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricAvgAggregate } from "../outputs/MetricAvgAggregate";
import { MetricCountAggregate } from "../outputs/MetricCountAggregate";
import { MetricMaxAggregate } from "../outputs/MetricMaxAggregate";
import { MetricMinAggregate } from "../outputs/MetricMinAggregate";
import { MetricSumAggregate } from "../outputs/MetricSumAggregate";

@TypeGraphQL.ObjectType("AggregateMetric", {
  isAbstract: true,
})
export class AggregateMetric {
  @TypeGraphQL.Field(() => MetricCountAggregate, { nullable: true })
  _count!: MetricCountAggregate | null;

  @TypeGraphQL.Field(() => MetricAvgAggregate, { nullable: true })
  _avg!: MetricAvgAggregate | null;

  @TypeGraphQL.Field(() => MetricSumAggregate, { nullable: true })
  _sum!: MetricSumAggregate | null;

  @TypeGraphQL.Field(() => MetricMinAggregate, { nullable: true })
  _min!: MetricMinAggregate | null;

  @TypeGraphQL.Field(() => MetricMaxAggregate, { nullable: true })
  _max!: MetricMaxAggregate | null;
}
