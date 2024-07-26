const router = require("express").Router();
const { Login, Register, Logout, addProduct } = require("../controllers/authControllers");
const multer = require("multer");
const storage = multer.diskStorage({});
const upload = multer({storage:storage});

router.post("/login", Login);
router.post("/register", Register);
router.post("/logout", Logout);
router.post('/add', upload.single("image"), addProduct);


module.exports = router;
