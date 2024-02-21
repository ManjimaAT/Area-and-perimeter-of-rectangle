const readline=require('readline');
const rl=readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Enter the length of the rectangle: ', (length) => {
rl.question('Enter the width of the rectangle: ', (width) => {
    length = parseFloat(length);
    width = parseFloat(width);
    const area = length*width;
    const perimeter = 2*(length + width);
    console.log(`Area of the rectangle: ${area}`);
    console.log(`Perimeter of the rectangle: ${perimeter}`);
    rl.close();
  });
});

