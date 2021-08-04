//-1-
function sayType(value) {
    if (typeof value == "number") {
       return "Это число";
    }
    if (typeof value == "string") {
       return "Это строка"; 
    }
    else {
        return "Не знаю";
    }
};

//-2-
function randNum() {
    return Math.floor(Math.random()*(100-0+1));
}

//-3-
let num = 1;
function addStars() {
    for (let i = 0; i < 7; i++) {
        num += '*'
    }
    return num;
};

//-4*-
let blockStars = '';
for (let i = 0; i < 10; i++) {
    for (let i = 0; i < 20; i++) {
        blockStars += '*'
    }
    blockStars += '\n'
};

//-5-
const array5 = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < array5.length; i++) {
    if(i % 2 === 1) {
       delete array5[i]
    }
};
 
//-6-
const array6 = [1,2,3,4,5]

for (let i = 5; i < 10; i++) {
    array6[i] = i+1
}

//-7*-
const array7 = []

for (let i = 0; i < 5; i++) {
    array7[i] = 'user'+(i+1)
};
 
const array7_filter = array7.filter(function(value) {
    return value[4] <= "1" || value[4] >= "5"
});
