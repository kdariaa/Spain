function calc() {
    console.log("x, a, b");

    let x = parseFloat(elementX.value);
    let a = parseFloat(elementA.value);
    let b = parseFloat(elementB.value);

    console.log(x, a, b);

    // Проверка: введены числа
    if (isNaN(x) || isNaN(a) || isNaN(b)) {
        result = "Ошибка: введите числа X, a и b";
        check = false;
    }
    // Проверка: границы промежутка заданы верно
    else if (a > b) {
        result = "Ошибка: a не должно быть больше b";
        check = false;
    }
    // Принадлежность промежутку [a, b]
    else if (x >= a && x <= b) {
        result = "Число " + x + " принадлежит промежутку [" + a + ", " + b + "]";
        check = true;
    }
    else {
        result = "Число " + x + " не принадлежит промежутку [" + a + ", " + b + "]";
        check = true;
    }

    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Данные неверные или результат не вычислен. Нажмите 'Вычислить'.");
    }
}

let result;
let check = false;

const elementX = document.getElementById("x");
const elementA = document.getElementById("a");
const elementB = document.getElementById("b");

const elementCalc = document.getElementById("calc");
elementCalc.addEventListener('click', calc);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);
