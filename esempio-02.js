if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error!');
}


const num = 50;

if (num < 49) {
    console.log('Error!');
} else if (num > 100) {
    console.log('Troppo!');
} else {
    console.log('Ok!');
}

const num1 = 50;

(num1 === 50) ? console.log('Ok!') : console.log('Error!');

const num = 50;

switch (num) {
    case 49:
        console.log('Non è vero!');
        break;
    case 100:
        console.log('Non è vero!');
        break;
    case 50:
        console.log('Vero!');
        break;
    default:
        console.log('Non adesso!');
        break;
}