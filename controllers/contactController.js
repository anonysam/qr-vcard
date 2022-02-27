import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import { contactService } from "../services/index.js";

// @route   GET /contact
// @desc    GET all contacts
// @access
const getAll = async (req, res) => {
  const data = await contactService.getAll({ filter: {} });
  res.status(200).json({ success: true, data });
};

// @route   GET /contact/:id
// @desc    GET a single contact
// @access  Private
const getOne = async (req, res) => {
  const data = await contactService.getOne({ id: req.params.id });
  res.status(200).json({ success: true, data });
};

// @route   POST /contact
// @desc    Create a new contact
// @access  Private
const add = async (req, res) => {
  const newContact = await contactService.add(req.body);
  res.status(200).json({ data: newContact });
};

// @route   PUT /contact/:id
// @desc    Update contact
// @access  Private
const update = async (req, res) => {
  const { id } = req.params;
  const updatedContact = await contactService.update({ id, data: req.body });
  res.status(200).json({ success: true, data: updatedContact });
};

// @route   DELETE /contact/:id
// @desc    DELETE contact
// @access  Private
const del = async (req, res) => {
  const { id } = req.params;
  const deleteContact = await contactService.del({ id });
  res.status(200).json({ success: true, data: [] });
};

export { getAll, getOne, add, update, del };
