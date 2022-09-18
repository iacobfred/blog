/* Do not edit this file. It was generated programmatically. */

import { Shelving } from "@web/generated/interfaces/Shelving";
import { ShelvingDocument } from "@web/generated/models/Shelving/document";
import { postCreate, postUpdate, preSave } from "@web/generated/models/Shelving/hooks";
import { DEFAULT_SCHEMA_OPTIONS } from "@web/graphql/schema/types";
import mongoose, { ModifyResult, UpdateQuery } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

const shelvingSchema = new mongoose.Schema<Shelving>(
  {
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
    shelfId: { type: mongoose.Schema.Types.ObjectId, ref: "Shelf", required: true },
    position: { type: Number, required: true },
    rationale: { type: String, required: false, default: null },
    archivedAt: { type: Date, required: false, default: null },
  },
  DEFAULT_SCHEMA_OPTIONS
);

shelvingSchema.plugin(mongooseLeanVirtuals);

shelvingSchema.pre<ShelvingDocument>("save", async function () {
  console.log("Saving Shelving", this);
  await preSave(this);
});

shelvingSchema.post<ShelvingDocument>("save", async function (document) {
  console.log("Saved Shelving", document);
  await postCreate(document);
});

shelvingSchema.post<ShelvingDocument>(
  "findOneAndUpdate",
  async function (_result: ShelvingDocument | ModifyResult<ShelvingDocument>) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const query = this as unknown as UpdateQuery<ShelvingDocument>;
    const updatedFields = query.getUpdate().$set;
    if ((_result as ModifyResult<ShelvingDocument>).value) {
      const result = _result as ModifyResult<ShelvingDocument>;
      const shelving = result.value;
      if (shelving) {
        if (!result.lastErrorObject?.updatedExisting) {
          await postCreate(shelving);
        } else {
          await postUpdate(shelving, updatedFields);
        }
      }
    } else {
      const result = _result as ShelvingDocument;
      await postUpdate(result, updatedFields);
    }
  }
);

export { shelvingSchema };

// https://stackoverflow.com/questions/19051041/cannot-overwrite-model-once-compiled-mongoose
export const ShelvingModel =
  mongoose.models.Shelving || mongoose.model<Shelving>("Shelving", shelvingSchema);

export default ShelvingModel;
