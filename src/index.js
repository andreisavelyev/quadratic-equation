module.exports = function solveEquation(equation) {
  var arr = equation.split(' ');
  var result = [];

  var a = +arr[0];
  var b = arr[3] === '-' ? -+arr[4] : +arr[4];
  var c = arr[7] === '-' ? -+arr[8] : +arr[8];
  var discriminant = Math.pow(b,2)-4*a*c;
  result.push(Math.round((-b-Math.sqrt(discriminant))/(2*a)));
  result.push(Math.round((-b+Math.sqrt(discriminant))/(2*a)));
  return result.sort(function(a,b){
    return a-b;
  });
}
