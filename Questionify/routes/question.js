const { Router } = require("express");
const multer = require("multer");
const path = require("path");

const Question = require("../models/question");
const Comment = require("../models/comment");

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/`));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

router.get("/add-new", (req, res) => {
  return res.render("addQuestion", {
    user: req.user,
  });
});

router.get("/:id", async (req, res) => {
  const question = await Question.findById(req.params.id).populate("createdBy");
  const comments = await Comment.find({ questionId: req.params.id}).populate("createdBy");
  return res.render("question", {
    user: req.user,
    question,
    comments
  });
});

router.post("/comment/:questionId", async (req, res) => {
  await Comment.create({
    content: req.body.content,
    questionId: req.params.questionId,
    createdBy: req.user._id,
  });
  return res.redirect(`/question/${req.params.questionId}`);
});

router.post("/", upload.single("coverImage"), async (req, res) => {
  const { title, body } = req.body;
  const question = await Question.create({
    body,
    title,
    createdBy: req.user._id,
    coverImageURL: `/uploads/${req.file.filename}`,
  });
  return res.redirect(`/question/${question._id}`);
});

module.exports = router;