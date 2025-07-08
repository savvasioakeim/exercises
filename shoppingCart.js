const prices = {
  apple: 12,
  orange: 32,
  pen: 22,
  notebook: 89,
  peach: 18,
};
const basket = ["apple", "apple", "orange", "apple"];
const basket2 = [
  "apple",
  "pen",
  "peach",
  "apple",
  "pen",
  "peach",
  "notebook",
  "notebook",
  "orange",
];

const result = basket.reduce((acc, curr) => {
  return acc + prices[curr];
}, 0);
console.log(result);

const result2 = basket2.reduce((acc, curr) => {
  return acc + prices[curr];
}, 0);
console.log(result2);

offers = {
  apple: [2, 1],
  orange: [3, 1],
};
const basket3 = [
  "apple",
  "apple",
  "orange",
  "apple",
  "orange",
  "orange",
  "apple",
  "apple",
];
const result3 = basket3.reduce(
  (acc, curr, index, arr) => {
    acc.total[curr] = (acc.total[curr] || 0) + 1;
    if (index === arr.length - 1) {
      const final = Object.entries(acc.total).reduce((res, [fruit, amount]) => {
        if (offers[fruit]) {
          const [offerNeeded, offerFree] = offers[fruit];
          const freeItems = Math.floor(amount / offerNeeded) * offerFree;
          amount = amount - freeItems;
        }
        res += amount * prices[fruit];

        return res;
      }, 0);
      return final;
    }

    return acc;
  },
  { total: {} }
);
console.log(result3);
