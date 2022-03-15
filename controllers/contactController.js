import ErrorResponse from "../utils/errorResponse";
import asyncHandler from "../middlewares/asyncHandler";
import { contactService } from "../services";

// @route   GET /contact
// @desc    GET all contacts
// @access
const getAll = asyncHandler(async (req, res) => {
  const data = await contactService.getAll({ filter: {} });
  res.status(200).json({ success: true, data });
});

// @route   GET /contact/:id
// @desc    GET a single contact
// @access  Private
const getOne = asyncHandler(async (req, res) => {
  const data = await contactService.getOne({ id: req.params.id });
  res.status(200).json({ success: true, data });
});

// @route   POST /contact
// @desc    Create a new contact
// @access  Private
const add = asyncHandler(async (req, res) => {
  const newContact = await contactService.add(req.body);
  res.status(200).json({ data: newContact });
});

// @route   PUT /contact/:id
// @desc    Update contact
// @access  Private
const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedContact = await contactService.update({ id, data: req.body });
  res.status(200).json({ success: true, data: updatedContact });
});

// @route   DELETE /contact/:id
// @desc    DELETE contact
// @access  Private
const del = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deleteContact = await contactService.del({ id });
  res.status(200).json({ success: true, data: [] });
});

// @route   GET /contact/vcard/:id
// @desc    Get Vcard
// @access  Private
const vcard = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await contactService.getVcard({ uuid: id });
  res.set("Content-Type", `text/vcard; name="${data.contact.firstName}.vcf"`);
  res.set(
    "Content-Disposition",
    `inline; filename="${data.contact.firstName}.vcf"`
  );
  res.status(200).send(data.vcard);
});

export { getAll, getOne, add, update, del, vcard };
