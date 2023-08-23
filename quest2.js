const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });


let myMin=1;
let myMax=10; 
let randomNumber = Math.floor(Math.random() * (10) + myMin);
//console.log(randomNumber); // проверка

let counter = 0;

const fs = require('fs');
function log(pathToFile) {
    if(pathToFile) {
        fs.writeFileSync(pathToFile, ""); 
    }

    return function add(line) {
        if(pathToFile) {
            fs.appendFile(pathToFile, line, 'utf8', (err) => {
                if(err) {
                    console.log("Error");
                } 
            });
        }
        console.log(line);
        //console.log(lpathToFileine);

    };
}

function play(response) {
    rl.question('Введите число от 1 до 10: ', (input) => {
        let userNumber = +input;

        if(isNaN(userNumber) || userNumber < myMin || userNumber > myMax) {
            response(`Неправильный ввод. Введите число от 1 до 10!`);
            play(response);
        }

        counter++;

        if(userNumber === randomNumber||counter==1) {
            response(`Вот это везение! Подглядывали? Это число: ${randomNumber}. Использовано попыток: ${+counter}\n `);
            rl.close();
            return;
        }
    
        if(userNumber === randomNumber) {
            response(`Вы угадали! Это номер: ${randomNumber}. Использовано попыток: ${+counter}\n `);
            rl.close();
            return;
        }

    
        if(userNumber > randomNumber) {
            response(`Загаданное число меньше! Вы ввели число: ${userNumber}. Использовано попыток: ${counter}\n`);
        } else {
            response(`Загаданное число больше! Вы ввели число: ${userNumber}. Использовано попыток: ${counter}\n`);
        }
    
        rl.pause();
        play(response);
    });
}

let response = log("./log");
play(response);