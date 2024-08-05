export default function appendToEachArrayValue(array, appendString) {
  for (const val of array) {
    const value = array.indexOf(val);
    array[value] = appendString + val;
  }

  return array;
}
