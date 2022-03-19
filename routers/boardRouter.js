const express = require("express");
const boardControllers = require("../controllers/boardController");

const router = express.Router();

router.get("/notice", boardControllers.noticeController);

router.get("/contact", boardControllers.contactController);

router.get("/write", boardControllers.writeScreenController);
router.post("/write", boardControllers.writePostController);

module.exports = router;
