// @ts-check

const unknownObj = JSON.parse('{ hoge: "fuga" }');

/** @type {{ hoge: string }} */
const myObj = unknownObj;
myObj.hoge