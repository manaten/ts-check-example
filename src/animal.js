// @ts-check

/** @typedef {{ type: "dog", bow: () => void }} Dog */
/** @typedef {{ type: "cat", meow: () => void }} Cat */
/** @typedef {Dog | Cat} Animal */

/**
 * @param id {number}
 * @returns {Animal}
 */
 function getAnimal(id) {
  if (id === 1) {
    return { type: "dog", bow: () => {} };
  }
  return { type: "cat", meow: () => {} };
}

const animal = getAnimal(1);
if (animal.type === "cat") {
  animal.meow();
} else {
  animal.bow();
}
