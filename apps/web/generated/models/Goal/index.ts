/* Do not edit this file. It was generated programmatically. */

import { Goal } from "@web/generated/interfaces/Goal";
import { GoalDocument } from "@web/generated/models/Goal/document";
import { postCreate, postUpdate, preSave } from "@web/generated/models/Goal/hooks";
import { DEFAULT_SCHEMA_OPTIONS } from "@web/graphql/schema/types";
import mongoose, { ModifyResult, UpdateQuery } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

const goalSchema = new mongoose.Schema<Goal>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    habitId: { type: mongoose.Schema.Types.ObjectId, ref: "Habit", required: false, default: null },
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: "Goal", required: false, default: null },
    description: { type: String, required: true },
    archivedAt: { type: Date, required: false, default: null },
  },
  DEFAULT_SCHEMA_OPTIONS
);

goalSchema.plugin(mongooseLeanVirtuals);

goalSchema.pre<GoalDocument>("save", async function () {
  console.log("Saving Goal", this);
  await preSave(this);
});

goalSchema.post<GoalDocument>("save", async function (document) {
  console.log("Saved Goal", document);
  await postCreate(document);
});

goalSchema.post<GoalDocument>(
  "findOneAndUpdate",
  async function (_result: GoalDocument | ModifyResult<GoalDocument>) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const query = this as unknown as UpdateQuery<GoalDocument>;
    const updatedFields = query.getUpdate().$set;
    if ((_result as ModifyResult<GoalDocument>).value) {
      const result = _result as ModifyResult<GoalDocument>;
      const goal = result.value;
      if (goal) {
        if (!result.lastErrorObject?.updatedExisting) {
          await postCreate(goal);
        } else {
          await postUpdate(goal, updatedFields);
        }
      }
    } else {
      const result = _result as GoalDocument;
      await postUpdate(result, updatedFields);
    }
  }
);

export { goalSchema };

// https://stackoverflow.com/questions/19051041/cannot-overwrite-model-once-compiled-mongoose
export const GoalModel = mongoose.models.Goal || mongoose.model<Goal>("Goal", goalSchema);

export default GoalModel;
