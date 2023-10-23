export function sortSeats(arr) {
  if (!arr) return [];
  return arr.sort((a, b) => {
    const charA = a[0]; // First character of string A
    const charB = b[0]; // First character of string B

    if (charA < charB) {
      return -1;
    } else if (charA > charB) {
      return 1;
    } else {
      // If the first characters are the same, compare based on the numeric part
      const numA = parseInt(a.match(/\d+/)[0]);
      const numB = parseInt(b.match(/\d+/)[0]);

      if (numA < numB) {
        return -1;
      } else if (numA > numB) {
        return 1;
      } else {
        return 0;
      }
    }
  });
}
