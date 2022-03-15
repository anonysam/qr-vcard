import vCardJs from "vcards-js";

const generateVcard = (contact) => {
  const vCard = vCardJs();

  //Set primary properties
  vCard.firstName = contact.firstName;
  vCard.email = contact.email;
  vCard.cellPhone = contact.mobile;

  //Check if property exists then add to vCard

  if (contact.lastName) vCard.lastName = contact.lastName;
  if (contact.organization) vCard.organization = contact.organization;
  if (contact.title) vCard.title = contact.title;
  if (contact.workAddress) vCard.workAddress = contact.workAddress;
  if (contact.photo) vCard.photo.attachFromUrl(contact.photo);

  return vCard.getFormattedString();
};

export default generateVcard;
