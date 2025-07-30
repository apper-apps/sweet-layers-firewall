import cakesData from "@/services/mockData/cakes.json";

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getAll = async () => {
  await delay(300);
  return [...cakesData];
};

export const getById = async (id) => {
  await delay(200);
  const cake = cakesData.find(cake => cake.Id === parseInt(id));
  if (!cake) {
    throw new Error("Cake not found");
  }
  return { ...cake };
};

export const getFeatured = async () => {
  await delay(250);
  return cakesData.filter(cake => cake.isFeatured);
};

export const getByCategory = async (category) => {
  await delay(200);
  return cakesData.filter(cake => 
    cake.category.toLowerCase() === category.toLowerCase()
  );
};

export const search = async (query) => {
  await delay(200);
  const searchTerm = query.toLowerCase();
  return cakesData.filter(cake =>
    cake.name.toLowerCase().includes(searchTerm) ||
    cake.description.toLowerCase().includes(searchTerm) ||
    cake.category.toLowerCase().includes(searchTerm)
  );
};

export const create = async (cakeData) => {
  await delay(300);
  const newId = Math.max(...cakesData.map(cake => cake.Id)) + 1;
  const newCake = {
    ...cakeData,
    Id: newId
  };
  cakesData.push(newCake);
  return { ...newCake };
};

export const update = async (id, cakeData) => {
  await delay(300);
  const index = cakesData.findIndex(cake => cake.Id === parseInt(id));
  if (index === -1) {
    throw new Error("Cake not found");
  }
  cakesData[index] = { ...cakesData[index], ...cakeData };
  return { ...cakesData[index] };
};

export const remove = async (id) => {
  await delay(300);
  const index = cakesData.findIndex(cake => cake.Id === parseInt(id));
  if (index === -1) {
    throw new Error("Cake not found");
  }
  const deletedCake = cakesData.splice(index, 1)[0];
  return { ...deletedCake };
};