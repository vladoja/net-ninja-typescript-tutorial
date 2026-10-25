const character = 'mario';

let canFly = false;

console.log(character);

function circumference(diameter: number): number {
  return diameter * Math.PI;
}

console.log(circumference(10));

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});