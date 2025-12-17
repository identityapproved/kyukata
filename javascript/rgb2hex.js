/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value. */

const normalRage = (value) => (value < 0 ? 0 : value > 255 ? 255 : value);

/* {
  if (value < 0) {
    return 0;
  } else if (value > 255) {
    return 255;
  } else {
    return value;
  }
} */

const pad = (value) => (value.length === 1 ? 0 + value : value);

const toHex = (value) => pad(value.toString(16).toUpperCase());

const convert = (value) => toHex(normalRage(value));

function rgb(r, g, b) {
  return `${convert(r)}${convert(g)}${convert(b)}`;
}

console.log(rgb(0, 0, 0)); // "000000");
console.log(rgb(0, 0, -20)); // "000000");
console.log(rgb(300, 255, 255)); // "FFFFFF");
console.log(rgb(173, 255, 47)); // "ADFF2F");
