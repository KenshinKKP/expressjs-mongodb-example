import express from "express";

const router = express.Router();

/* GET home page. */
router.get("/", function (_, res) {
  res.render("index", { title: "Hello World" });
});

export default router;
