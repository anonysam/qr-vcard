import ErrorResponse from "../utils/errorResponse";
import asyncHandler from "../middlewares/asyncHandler";
import { userService } from "../services";

// @route   GET /user
// @desc    GET all users
// @access  Private
const getAll = asyncHandler(async (req, res) => {
  const filter = req.body.filter ? req.body.filter : {};
  const data = await userService.getAll({ filter });
  res.status(200).json({ success: true, data });
});

// @route   GET /user/:id
// @desc    GET a single user
// @access  Private

const getOne = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await userService.getOne({ id });
  res.status(200).json({ success: true, data });
});

// @route   POST /user
// @desc    Create a new user
// @access  Private
const add = asyncHandler(async (req, res) => {
  const data = await userService.add(req.body);
  res.status(200).json({ success: true, data });
});

// @route   PUT /user/:id
// @desc    Update user
// @access  Private
const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await userService.update({ id, data: req.body });
  res.status(200).json({ success: true, data });
});
// @route   DELETE /user/:id
// @desc    Delete user
// @access  Private
const del = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await userService.del({ id });
  res.status(200).json({ success: true, data: [] });
});

export { getAll, getOne, add, update, del };
