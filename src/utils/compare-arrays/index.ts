/**
 * Compares two arrays (of any dimentions) and returns true if they are equal and otherwise returns false
 * @param arr1 The first array to be compared
 * @param arr2 The second array to be compared
 */
function compareArrays(arr1: any[], arr2: any[]): boolean {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
    return arr1 === arr2;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let index = 0; index < arr1.length; index++) {
    if (!compareArrays(arr1[index], arr2[index])) {
      return false;
    }
  }

  return true;
}

export default compareArrays;
