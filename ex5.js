const y = {
  0: {
    id: "123",
    name: "Achilleas",
  },
  1: {
    id: "133",
    name: "Ioanna",
  },
};

//Η απάντηση σας να είναι της μορφής

const result = JSON.stringify(
  Object.entries(y).find(([, value]) => {
    return value.id === "133";
  })
);

console.log("result", result);
