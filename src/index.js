module.exports = function solveEquation(equation) {
  const arr = equation.split(" ");
  const result = [];
  const a = +arr[0];
  const b = arr[3] === "-" ? -+arr[4] : +arr[4];
  const c = arr[7] === "-" ? -+arr[8] : +arr[8];
  const discriminant = Math.pow(b, 2) - 4 * a * c;

  result.push(Math.round((-b - Math.sqrt(discriminant)) / (2 * a)));
  result.push(Math.round((-b + Math.sqrt(discriminant)) / (2 * a)));

  return result.sort((a, b) => a - b);
};
