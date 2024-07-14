import mongoose from "mongoose";
const IssueSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  author: { type: String, require: true },
});

const IssueModel = new mongoose.model("issue", IssueSchema);

export default IssueModel;
