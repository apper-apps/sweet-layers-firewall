import categoriesData from "@/services/mockData/categories.json";

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getAll = async () => {
  await delay(250);
  return [...categoriesData];
};

export const getById = async (id) => {
  await delay(200);
  const category = categoriesData.find(cat => cat.Id === parseInt(id));
  if (!category) {
    throw new Error("Category not found");
  }
  return { ...category };
};

export const create = async (categoryData) => {
  await delay(300);
  const newId = Math.max(...categoriesData.map(cat => cat.Id)) + 1;
  const newCategory = {
    ...categoryData,
    Id: newId
  };
  categoriesData.push(newCategory);
  return { ...newCategory };
};

export const update = async (id, categoryData) => {
  await delay(300);
  const index = categoriesData.findIndex(cat => cat.Id === parseInt(id));
  if (index === -1) {
    throw new Error("Category not found");
  }
  categoriesData[index] = { ...categoriesData[index], ...categoryData };
  return { ...categoriesData[index] };
};

export const remove = async (id) => {
  await delay(300);
  const index = categoriesData.findIndex(cat => cat.Id === parseInt(id));
  if (index === -1) {
    throw new Error("Category not found");
  }
  const deletedCategory = categoriesData.splice(index, 1)[0];
  return { ...deletedCategory };
};