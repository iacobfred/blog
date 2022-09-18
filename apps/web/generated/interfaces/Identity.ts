/* Do not edit this file. It was generated programmatically. */

import mongoose from "mongoose";

// https://mongoosejs.com/docs/typescript.html

export interface Identity {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  name: string;
  description?: string | null;
  createdAt: Date;
  updatedAt: Date;
  archivedAt?: Date | null;
}

export default Identity;
