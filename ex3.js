const cars = [
  {
    brand: "audi",
    year: 2000,
  },
  {
    brand: "fiat",
    year: 2002,
  },
];

// const newCars3 = [
// 	{
// 		audi: 2000
// 	},
// 	{
// 		fiat: 2002
// 	}
// ];

//Η απάντηση σας να είναι της μορφής

const newCars3 = cars.map((car) => {
  return {
    [car.brand]: car.year,
  };
});

console.log("newCars3", newCars3);
