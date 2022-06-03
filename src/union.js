// @ts-check

/**
 * @param id {number}
 * @returns {string | null}
 */
function getName(id) {
  if (id === 1) {
    return "manaten";
  }
  return null;
}

const someName = getName(2);
if (someName !== null) {
  someName.charAt(1);
}
