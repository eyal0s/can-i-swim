export const findIndex = (array, predicate) => {
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        return i;
      }
    }
    return -1; // Return -1 if no matching item is found
  }