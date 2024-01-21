const router = require("express").Router();
const user = require("./users");
const report = require("./report");
const post = require("./post");
const comment = require("./comment");
const reply = require("./reply");
const mypost = require("./mypost");
const userNotification = require("./userNotification");
const adminNotification = require("./adminNotification");
router.use("/user", user);
router.use("/report", report);
router.use("/post", post);
router.use("/comment", comment);
router.use("/reply", reply);
router.use("/mypost", mypost);
router.use("/userNotification", userNotification);
router.use("/adminNotification", adminNotification);

module.exports = router;
