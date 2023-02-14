const { Schema, model } = require("mongoose")

const commentSchema = new Schema(
  {
    user: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Comment = model("Comment", commentSchema)
module.exports = Comment