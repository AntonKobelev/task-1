let money, time, appData, mandatoryExpenditureItem, cost, budgetFor1Day, items;

function start () {  
    //isNaN проверка money - возвращает true если в переменную записываются не цифры, цикл будет работать дальше
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
        time = prompt("Введите дату в формате YYYY-MM-DD");
    }
}
start();

appData = {  //создаем объект для хранения данных
    budget:money, 
    timeData: time, 
    expenses : {}, 
    optionalExpenses: {}, 
    income : [], //сюда будет заполняться дополнительный доход, который можно получить.
    savings: true,
    chooseExpenses: function () { //выберите расходы
        for (let i = 0; i < 2; i++) {
            mandatoryExpenditureItem = prompt("Введите обязательную статью расходов в этом месяце");
            cost = prompt("Во сколько обойдется?");
            if (typeof (mandatoryExpenditureItem === 'string') && mandatoryExpenditureItem != null && typeof cost != null && mandatoryExpenditureItem != '' && cost != '' && mandatoryExpenditureItem.length < 50) { // проверяем явл. ли mandatoryExpenditureItem строкой и не является null и cost не является null и mandatoryExpenditureItem cost  не является пустой строкой и длина mandatoryExpenditureItem должна быть меньше 50
                console.log('done');
                appData.expenses[mandatoryExpenditureItem] = cost; //добавляем в объект expenses пару ключ-значение обяз.статья расходов - стоимость
            } else {
                i--; //если if не срабатывает то компенсируем i, то есть обнуляем чтобы еще раз if сработал
            }
        }
    },
    detectDayBudget: function() { //определение дневного бюджета
        appData.budgetFor1Day = (appData.budget / 30).toFixed(); // разделим на 30 бюджет и добавим в объект appData новое свойство budgetFor1Day и округлим
        alert("Ежедневный бюджет " + appData.budgetFor1Day);
    },

    detectLevel: function() { //определяем уровень достатка
        if (appData.budgetFor1Day < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.budgetFor1Day > 100 && appData.budgetFor1Day < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.budgetFor1Day > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {     //функция для расчета накопления с депозита
        if (appData.savings == true) { //проверяем есть ли сбережения?
            let save = +prompt("Какова сумма накоплений?"),
                persent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*persent; //добавляем в объект , создаем новое свойство monthIncome. Переводим в проценты - делим на 100 и делим на 12 месяцев и умножаем на процент
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() { //создаем функцию, которая задает пользователю 3 вопроса.
        for (i = 1; i < 4; i++){
            appData.optionalExpenses[i] = prompt("Статья необязательных расходов?");
        }
    },
    chooseIncome: function(){ //создаем функцию, которая спрашивает пользователя.Что принесет дополнительный доход?
        do {
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)",""); //просим пользователя ввести через запятую доходы
            if (isNaN(items)) { // проверка , items строка?
                appData.income = items.split(', ');//добавляем ответы пользователя (дробим через запятую) в массив appData, в свойство income
                appData.income.push(prompt('Может что-то еще?'));//добавляем элемент в конец массива
                appData.income.sort();
                }
        }
        while (!isNaN(items) || items == "" || items == null); // спрашиваем до тех пор пока не введет строку, это число? это пустая строка, это null? (к примеру, переменная item сейчас существует, но она не имеет ни типа, ни значения)
        appData.income.forEach(function(item, index) { //обращаемся к массиву и вызываем метод forEach для перебора элементов массива
            console.log("Способы дополнительного заработка: ");
            console.log((index + 1) + ":" + item); // выводим индекс с 1 и элемент массива
        });
    }

};

function print (){
    console.log("Наша программа включает в себя данные: ");
    for (var key in appData) {
        console.log(key + " - " + appData[key]);
    }

}

print();

 

