export const assetList = Array.from({ length: 14 }).map((_, index) => {
  let itemP = ``;

  if (index % 2 === 0) {
    itemP = `-0.${index + 1}`;
  } else if (index % 3 === 0) {
    itemP = `0.${index + 1}`;
  } else {
    itemP = `0.00`;
  }

  const itemN = index % 7 === 0 ? `Milho` : `Diamantino`;
  return {
    id: index,
    name: itemN,
    value: 214.72,
    percentage: itemP,
  };
});
