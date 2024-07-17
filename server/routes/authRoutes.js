const router = require("express").Router();

const { Login, Register } = require("../controllers/authControllers");

router.post("/login", Login);
router.post("/register", Register);

module.exports = router;
