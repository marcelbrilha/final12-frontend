const _defaultOptions = { lang: "pt-BR", style: "currency", currency: "BRL" };
function _validateOptionsFuncFormatMoney(options) {
  const requiredKeys = Object.keys(_defaultOptions);

  requiredKeys.forEach((key) => {
    if (!options[key]) {
      throw new Error(`${key} is required in options the format money`);
    }
  });
}

/**
 * Format to money
 * @param {String} value Value to be formatted
 * @return {String} Value formatted
 */
export function formatMoney(value, options = _defaultOptions) {
  _validateOptionsFuncFormatMoney(options);

  return value
    ? value.toLocaleString(options.lang, options)
    : "0".toLocaleString(options.lang, options);
}

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
