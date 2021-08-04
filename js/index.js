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

