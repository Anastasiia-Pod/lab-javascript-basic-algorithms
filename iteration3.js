/*3.1*/
function hack1UpPrint (hacker1) {
    const hack1Up = hacker1.toUpperCase();
    const hack1Sp = hack1Up.split('').join(' ');
    console.log(hack1Sp);
    }
    const hacker1 = 'Alex';
    hack1UpPrint (hacker1);
    
    function hack2UpPrint (hacker2) {
    const hack2Up = hacker2.toUpperCase();
    const hack2Sp = hack2Up.split('').join(' ');
    console.log(hack2Sp);
    }
    const hacker2 = 'Joe';
    hack2UpPrint (hacker2);

/*3.2*/
function reverseString(hacker1) {
    let newString = "";
    for (let i = hacker1.length - 1; i>= 0; i--) {
        newString +=hacker1[i]
    }
    console.log(newString)
}
reverseString(hacker1);

function reverseString(hacker2) {
    let newString = "";
    for (let y = hacker2.length - 1; y>= 0; y--) {
        newString +=hacker2[y]
    }
    console.log(newString)
}
reverseString(hacker2);

/*3.3*/
function compareStrings(hacker1, hacker2) {
    if (hacker1 < hacker2) {
        return -1;
    } else if (hacker1 > hacker2) {
        return 1;
    } else {
        return 0;
    }
}

const comparisonResult = compareStrings(hacker1, hacker2);
if (comparisonResult < 0) {
    console.log(`The driver's name goes first.`);
} else if (comparisonResult > 0) {
    console.log(`Yo, the navigator goes first, definitely.`);
} else {
    console.log(`What?! You both have the same name?.`);
}