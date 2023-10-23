import { getAlphabet } from "./getAlphabet";

export function getRowAlphabet(rowType, rowNum, totalPremiumRows) {
  if (rowType === "Premium") {
    return getAlphabet(rowNum + 1);
  } else {
    return getAlphabet(rowNum + totalPremiumRows + 1);
  }
}
