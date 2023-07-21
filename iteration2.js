let hacker1;
hacker1 = 'Alex';
console.log(`The driver's name is ${hacker1}`);
let hacker2;
hacker2 = 'Joe';
console.log(`The navigator's name is ${hacker2}`);

const lengHackOne = hacker1.length;
const lengHackTwo = hacker2.length;

if(lengHackOne>lengHackTwo){
    console.log(`The driver has the longest name, it has ${lengHackOne} characters`)
} else if (lengHackOne<lengHackTwo){
    console.log(`It seems that navigator has the longest name, it has ${lengHackTwo} characters`)
} else {console.log(`Wow, you both have equally long names, ${lengHackOne} characters!`)}