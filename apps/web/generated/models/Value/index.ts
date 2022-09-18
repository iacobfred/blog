/* Do not edit this file. It was generated programmatically. */

import { Value } from "@web/generated/interfaces/Value";
import { ValueDocument } from "@web/generated/models/Value/document";
import { postCreate, postUpdate, preSave } from "@web/generated/models/Value/hooks";
import { DEFAULT_SCHEMA_OPTIONS } from "@web/graphql/schema/types";
import mongoose, { ModifyResult, UpdateQuery } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

const valueSchema = new mongoose.Schema<Value>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    description: { type: String, required: false, default: null },
    archivedAt: { type: Date, required: false, default: null },
  },
  DEFAULT_SCHEMA_OPTIONS
);

valueSchema.plugin(mongooseLeanVirtuals);

valueSchema.pre<ValueDocument>("save", async function () {
  console.log("Saving Value", this);
  await preSave(this);
});

valueSchema.post<ValueDocument>("save", async function (document) {
  console.log("Saved Value", document);
  await postCreate(document);
});

valueSchema.post<ValueDocument>(
  "findOneAndUpdate",
  async function (_result: ValueDocument | ModifyResult<ValueDocument>) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const query = this as unknown as UpdateQuery<ValueDocument>;
    const updatedFields = query.getUpdate().$set;
    if ((_result as ModifyResult<ValueDocument>).value) {
      const result = _result as ModifyResult<ValueDocument>;
      const value = result.value;
      if (value) {
        if (!result.lastErrorObject?.updatedExisting) {
          await postCreate(value);
        } else {
          await postUpdate(value, updatedFields);
        }
      }
    } else {
      const result = _result as ValueDocument;
      await postUpdate(result, updatedFields);
    }
  }
);

export { valueSchema };

// https://stackoverflow.com/questions/19051041/cannot-overwrite-model-once-compiled-mongoose
export const ValueModel = mongoose.models.Value || mongoose.model<Value>("Value", valueSchema);

export default ValueModel;
