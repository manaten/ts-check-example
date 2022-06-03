// @ts-check

/** @typedef {{ name: string; amount: number; taxIn?: boolean; }} Product */

/** @type {Product} */
const product1 = {
  name: "A Product",
  amount: 500,
  taxIn: false,
};

/** @type {Product} */
const product2 = {
  name: "Another Product",
  amount: "100",
  taxIn: false,
};

/** @type {Product} */
const product3 = {
  name: "Other Product",
  amount: 500,
  taxIn: false,
  hoge: 1234
};

product1.amount