/* Do not edit this file. It was generated programmatically. */

import { ModelOptions, post, pre, prop as Property } from "@typegoose/typegoose";
import { ObjectIdScalar } from "@web/graphql/schema/scalars";
import { DEFAULT_MODEL_OPTIONS, Model } from "@web/graphql/schema/types";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { postSave, postUpdate, preSave } from "./hooks";

@TypeGraphQL.ObjectType()
@ModelOptions(DEFAULT_MODEL_OPTIONS)
@pre<Note>("save", preSave)
@post<Note>("save", postSave)
@post<Note>("findOneAndUpdate", postUpdate)
export default class Note extends Model {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  @Property({ required: true })
  userId!: string;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  @Property({ required: true })
  notebookId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ type: () => String, required: true })
  title!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ type: () => String, required: false, default: "" })
  body?: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  @Property({ type: () => Boolean, required: false, default: null })
  public?: boolean | null;
}
