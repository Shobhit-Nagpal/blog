const express = require("express");
const router = express.Router();
const post_controller = require("../controllers/postController");
const auth_controller = require("../controllers/authController");

router.get("/", post_controller.post_list);

router.post("/post", post_controller.post_put);

router.get("/post/:id", post_controller.post_get);
router.put("/post/:id", post_controller.post_put);
router.delete("/post/:id", post_controller.post_delete);

router.post("/login", auth_controller.login_post);
router.post("/register", auth_controller.register_post);
router.post("/admin", auth_controller.admin_post);

module.exports = router;
