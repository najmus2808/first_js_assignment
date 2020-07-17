// FEET TO MILE CONVERSION

function feetToMile(feet) {
    if (feet < 0) {
        return "Distance is never negative! Enter a positive number.";
    }

    var mile = feet / 5280;
    return mile;
}

var result = feetToMile(25);
console.log(result);


//WOOD_CALCULATOR

function woodCalculator(chair, table, bed) {
    var total = (chair * 1) + (table * 3) + (bed * 5);
    return total;
}

var result = woodCalculator(8, 4, 2);
console.log('You need : ' + result + ' Cubic Feet wood');


// BRICK_CALCULATOR

function brickCalculator(floor) {
    if (floor <= 10) {
        var numberOfBricks = (floor * 15 * 1000);
        return numberOfBricks;
    }

    else if (floor > 10 && floor <= 20) {
        var numberOfBricks = (10 * 15 * 1000) + (tala - 10) * 12 * 1000;
        return numberOfBricks;
    }

    else if (floor > 20) {
        var numberOfBricks = (10 * 15 * 1000) + (10 * 12 * 1000) + (floor - 20) * 10 * 1000;
        return numberOfBricks;
    }
}

var result = brickCalculator(22)
console.log('You need: ' + result + ' Bricks');



// FIND TINY 

function tinyFriend(names) {

    if (names.length == 0) {
        return "Array is empty";
    }

    var tiny = names[0];
    for (i = 1; i < names.length; i++) {
        var currentName = names[i];
        if (currentName.length < tiny.length) {
            tiny = currentName;
        }
    }

    var newArray = [];

    for (i = 0; i < names.length; i++) {
        currentName2 = names[i];
        if (tiny.length == currentName2.length) {
            newArray.push(currentName2);
        }
    }

    return newArray;
}

result = tinyFriend(['Sakib', 'Fakhrul', 'Fahim', 'Jim', 'Rakib', 'Sunny', 'Jmail Khan']);
console.log(result);