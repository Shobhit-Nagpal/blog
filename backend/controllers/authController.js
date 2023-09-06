const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.login_post =  asyncHandler(async (req, res, next) => {
    res.send("Yet to implement user post");
});

exports.register_post = asyncHandler(async (req, res, next) => {
    res.send("Yet to implement register post");
});

exports.admin_post = asyncHandler(async (req, res, next) => {
    res.send("Yet to implement admin post");
});
