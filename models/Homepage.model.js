const { Schema, model } = require("mongoose")

const homepageSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    review: {
      type: String,
      required: true
    }, 
    categories: {
        type: String
    }, 
    url: {
        type: String,
    },

    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment"
      }
    ]
  },
  {
    timestamps: true
  }
)

const Homepages = model("Homepages", homepageSchema)
module.exports = Homepages