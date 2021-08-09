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

//-8-
const array8_String = ['a','b','c','d','e'];
const array8_Number = [6,7,8,9,10];
const array8_all = array8_String.push(array8_Number);// масиив в массиве(не уверен что должно быть так)(Но по идеи задача ведь добавить массив в конец другого массива)


//alternative1
const array8_String_alt1 = ['a','b','c','d','e'];
array8_String_alt1.push(6,7,8,9,10);// push в массив просто новых переменных(не уверен что должно быть так)

//alternative2
const array8_String_alt2 = ['a','b','c','d','e'];
const array8_Number_alt2 = [6,7,8,9,10];
const array8_all_alt2 = array8_String_alt2.concat(array8_Number_alt2); // Ближе похоже к правде?Лучше обьеденить переменные)))

//-9-
const array9 = [1,'a',2,'b',3,'c'];
array9.join(' или ');

//-10-
const array10 = [4,9,16,25,36,49,64,81,100,121,144,169,196,225];
const array10_sqrt = array10.map(Math.sqrt);


//-11-
const array11 = [];

for (let i = 0; i < 15; i++) {
    array11.push(Math.round(Math.random()*30))
};

function getIndex() {
    for (let i = 0; i < array11.length; i++) {
        if(array11[`${i}`] > 10 && array11[`${i}`] < 20) {
            return array11.indexOf(array11[i])
        }        
    }
};
getIndex();

//-12*-
const array12 = ['Гром','Ручка','Олово','Линия','Рим','Красота'];
const array12_filter = []

function getLetter() {
    for (let i = 0; i < array12.length; i++) { //цикл прохода по буквам
        if(array12[i].toLowerCase().includes('р') === true || array12[i].toLowerCase().includes('о') === true){// поиск нужной буквы
            array12_filter.push(array12[i])
        }
        else {
            continue
        }
    }

}
getLetter();


//-13- 
const obj13 = {
    login: 'ffoee',
    pass: '123Test',
}

JSON.stringify(obj13);

//-14-
const str14 = '{ "users": [ { "firstname": "Elena", "lastname": "Vaenga" }, { "firstname": "Pavlo", "lastname": "Zibrov" } ] }';

JSON.parse(str14);

//-15-
const obj15 = { constSercetPassCode: "RAMESES" };

Object.freeze(obj15);