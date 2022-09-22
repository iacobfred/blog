/* Do not edit this file. It was generated programmatically. */

import { Value } from "@web/generated/interfaces/Value";
import { postCreate, postUpdate, preSave } from "@web/generated/models/Value/hooks";
import { DEFAULT_SCHEMA_OPTIONS } from "@web/graphql/schema/types";
import mongoose, { HydratedDocument, ModifyResult, UpdateQuery } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

const valueSchema = new mongoose.Schema<Value>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: false,
      default: null,
    },
    archivedAt: { type: Date, required: false, default: null },
  },
  DEFAULT_SCHEMA_OPTIONS
);

valueSchema.plugin(mongooseLeanVirtuals);

valueSchema.pre<HydratedDocument<Value>>("save", async function () {
  return Promise.resolve(preSave(this));
});

valueSchema.post<Value>("save", async function (document) {
  await postCreate(document);
});

valueSchema.post<Value>("findOneAndUpdate", async function (_result: Value | ModifyResult<Value>) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const query = this as unknown as UpdateQuery<Value>;
  const updatedFields = query.getUpdate().$set;
  if ((_result as ModifyResult<Value>).value) {
    const result = _result as ModifyResult<Value>;
    const value = result.value;
    if (value) {
      if (!result.lastErrorObject?.updatedExisting) {
        await postCreate(value);
      } else {
        await postUpdate(value, updatedFields);
      }
    }
  } else {
    const result = _result as Value;
    await postUpdate(result, updatedFields);
  }
});

export { valueSchema };

// https://stackoverflow.com/questions/19051041/cannot-overwrite-model-once-compiled-mongoose
export const ValueModel: mongoose.Model<Value> =
  mongoose.models.Value || mongoose.model<Value>("Value", valueSchema);

export default ValueModel;
