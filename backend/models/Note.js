const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    text: {
      type: String,
      required: [true, "Note text is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);
