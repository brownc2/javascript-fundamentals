const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const my_Function = (single_name) => {
  return `Hi ${single_name.name} ${single_name.discount}% off our best candies for you today!`
}

console.log(namesAndDiscounts.map(my_Function)); 



