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
}

//-2-
function randNum() {
    return Math.floor(Math.random()*(100-0+1));
}

//-3-
let num = 1
function addStars() {
    for (let i = 0; i < 7; i++) {
        num += '*'
    }
    return num;
}

//-4*-
let blockStars = ''
for (let i = 0; i < 10; i++) {
    for (let i = 0; i < 20; i++) {
        blockStars += '*'
    }
    blockStars += '\n'
}
