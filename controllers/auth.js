const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const signup = async (req, res) => {
    const user = await User.create({ ...req.body });
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({
        user: { name: user.name },
        token,
    });
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new BadRequestError("Please provide email or password");
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new UnauthenticatedError("Invalid credentials");
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError("Invalid credentials");
    }

    const token = user.createJWT();
    res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

const logout = async (req, res) => {
    // Token is removed from localstorage at client side
    res.status(StatusCodes.OK).send("Logout successful!");
};

module.exports = {
    signup,
    login,
    logout,
};
