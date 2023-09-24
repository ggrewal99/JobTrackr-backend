const express = require("express");
const router = express.Router();

const { signup, login, logout } = require("../controllers/auth");

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

//TESTING ROUTES
router.get("/signup", (req, res) => {
    res.send("Sign up page");
});
router.get("/login", (req, res) => {
    res.send("Login page");
});

module.exports = router;
