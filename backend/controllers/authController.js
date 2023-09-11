const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.login_post =  asyncHandler(async (req, res, next) => {
    res.send("Yet to implement user post");
});

exports.register_post = [
    body("username", "Username should be minimum 4 characters").trim().isLength({ min: 4 }).escape(),
    body("password", "Password should be minimum 4 characters").trim().isLength({ min: 8 }).escape(),
    body("firstname", "First name should not be empty").trim().isLength({ min: 1 }).escape(),
    body("familyname", "Family name should not be empty").trim().isLength({ min: 1 }).escape(),
    body("confirmpassword", "Password does not match").trim().isLength({ min: 8 }).custom((value, { req }) => {
        return value === req.body.password;
    }),
    asyncHandler( async (req ,res, next) => {
        const errors = validationResult(req);
        const userExists = await User.find({ username: req.body.username }).exec();

        if (userExists) {
            res.json({errors: ["User already exists"]});
            return;
        }

        if (!errors.isEmpty()) {
            res.json({ errors: errors.array() });
        }
        else {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
                firstName: req.body.firstname,
                familyName: req.body.familyname,
            });

            await newUser.save();
            res.json({ message: "User created" });
        }
    })
];

exports.admin_post = asyncHandler(async (req, res, next) => {
    res.send("Yet to implement admin post");
});
