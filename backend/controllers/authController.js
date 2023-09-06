const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.auth_post = asyncHandler(async (req, res, next) => {
    res.send("Yet to implement user post");
});
