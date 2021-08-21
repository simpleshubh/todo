import { model, Schema } from "mongoose"
import { iTodo } from "./../types/todo"

const todoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      require: true,
    },
  },
  { timestamps: true }
)

export default model<iTodo>("mTodo", todoSchema)