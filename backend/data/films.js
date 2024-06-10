const fs = require("node:fs/promises");

const { v4: generateId } = require("uuid");
const { NotFoundError } = require("../util/errors");

const readData = async () => {
  const data = await fs.readFile("films.json", "utf8");
  return JSON.parse(data);
};

const writeData = async (data) => {
  await fs.writeFile("films.json", JSON.stringify(data));
};

const getAll = async () => {
  const storedData = await readData();
  if (!storedData.films || storedData.films.length === 0) {
    throw new NotFoundError("Could not find any films.");
  }
  return storedData.films;
};

const get = async (id) => {
  const storedData = await readData();

  if (!storedData.films || storedData.films.length === 0) {
    throw new NotFoundError("Could not find any films.");
  }

  const film = storedData.films.find((film) => film.id === id);
  if (!film) {
    throw new NotFoundError("Could not find film for " + id);
  }
  return film;
};

const add = async (data) => {
  const storedData = await readData();
  storedData.films.unshift({ ...data, id: generateId() });
  await writeData(storedData);
};

const replace = async (id, data) => {
  const storedData = await readData();
  if (!storedData.films || storedData.films.length === 0) {
    throw new NotFoundError("Could not find any films.");
  }

  const filmIndex = storedData.films.findIndex((film) => film.id === id);
  if (filmIndex < 0) {
    throw new NotFoundError("Could not find film for " + id);
  }

  storedData.films[filmIndex] = { ...storedData.films[filmIndex], ...data };

  await writeData(storedData);
};

const remove = async (id) => {
  const storedData = await readData();
  const updatedData = storedData.films.filter((film) => film.id !== id);
  await writeData({ ...storedData, films: updatedData });
};

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
