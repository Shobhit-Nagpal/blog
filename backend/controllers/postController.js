const Post = require("../models/post");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.post_list = asyncHandler(async (req, res, next) => {
    res.send("Yet to implement post list");
});

exports.post_get = asyncHandler(async (req, res, next) => {
    res.send("Yet to implement get post");
});

exports.post_post = asyncHandler(async (req, res, next) => {
    res.send("Yet to implment post post");
});

exports.post_put = asyncHandler(async (req, res, next) => {
    res.send("Yet to implement put post");
});

exports.post_delete = asyncHandler(async (req, res, next) => {
    res.send("Yet to implement delete post");
});
