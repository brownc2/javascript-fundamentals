const phone_numbers = ['1763687364','4763687363','7867867862','AAAA#####AAAA#87@768767382672','4763687363','4763687363']

const my_function = (phone_number) => {
  if (phone_number.length <= 10) {
    return true;
  }else {
    return false;
  }
}

const number = phone_numbers.filter(my_function);
console.log(number);