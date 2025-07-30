import seasonalOffersData from "@/services/mockData/seasonalOffers.json";

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getAll = async () => {
  await delay(250);
  return [...seasonalOffersData];
};

export const getById = async (id) => {
  await delay(200);
  const offer = seasonalOffersData.find(offer => offer.Id === parseInt(id));
  if (!offer) {
    throw new Error("Seasonal offer not found");
  }
  return { ...offer };
};

export const getActive = async () => {
  await delay(200);
  const now = new Date();
  return seasonalOffersData.filter(offer => new Date(offer.validUntil) > now);
};

export const create = async (offerData) => {
  await delay(300);
  const newId = Math.max(...seasonalOffersData.map(offer => offer.Id)) + 1;
  const newOffer = {
    ...offerData,
    Id: newId
  };
  seasonalOffersData.push(newOffer);
  return { ...newOffer };
};

export const update = async (id, offerData) => {
  await delay(300);
  const index = seasonalOffersData.findIndex(offer => offer.Id === parseInt(id));
  if (index === -1) {
    throw new Error("Seasonal offer not found");
  }
  seasonalOffersData[index] = { ...seasonalOffersData[index], ...offerData };
  return { ...seasonalOffersData[index] };
};

export const remove = async (id) => {
  await delay(300);
  const index = seasonalOffersData.findIndex(offer => offer.Id === parseInt(id));
  if (index === -1) {
    throw new Error("Seasonal offer not found");
  }
  const deletedOffer = seasonalOffersData.splice(index, 1)[0];
  return { ...deletedOffer };
};