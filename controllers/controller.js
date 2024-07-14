import IssueModel from "../models/issue.schema.js";

const homeController = async (req, res) => {
  res.render("index");
};

const createController = async (req, res) => {
  const issue = await IssueModel({
    name: req.body.name,
    description: req.body.description,
    author: req.body.author,
  });
  if (issue) {
    await issue.save();
    console.log("data saved");
  } else {
    console.log("date not saved");
  }
  res.render("index");
};

const readController = async (req, res) => {
  try {
    const issues = await IssueModel.find({});
    if (issues) {
      res.render("read", { issues });
    } else {
      res.render("read");
    }
  } catch (error) {
    console.log(error);
  }
};

const editController = async (req, res) => {
  try {
    const issue = await IssueModel.findById({ _id: req.params.id });
    if (issue) {
      res.render("edit", { issue });
    }
    res.render("edit");
  } catch (error) {
    console.log(error);
  }
};

const updateController = async (req, res) => {
  try {
    const updatedIssue = await IssueModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (updatedIssue) {
      res.redirect("/");
    } else {
      res.redirect("read");
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteController = async (req, res) => {
  try {
    const deleteRecord = await IssueModel.findByIdAndDelete(req.params.id);
    if (deleteRecord) {
      res.redirect("read");
    } else {
      res.redirect("/");
    }
  } catch (error) {
    console.log(error);
  }
};
export {
  homeController,
  createController,
  readController,
  editController,
  updateController,
  deleteController,
};
