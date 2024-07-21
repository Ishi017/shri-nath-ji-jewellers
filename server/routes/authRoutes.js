const router = require("express").Router();

const { Login, Register, Logout } = require("../controllers/authControllers");

router.post("/login", Login);
router.post("/register", Register);
router.post("/logout", Logout);

module.exports = router;
