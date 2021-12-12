/**
 * Parse money
 * @param {String|Number} value Value to be parsed
 * @return {Number} Converted number
 */
export function parseMoney(value) {
  if (!value) return 0;
  let replacedValue = String(value).replace(/[^0-9]/g, "");

  if (String(value).includes(".") || String(value).includes(",")) {
    replacedValue = parseFloat(replacedValue) / 100;
  }

  return parseFloat(replacedValue);
}
