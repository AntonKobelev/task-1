let money, time, appData, mandatoryExpenditureItem, cost, budgetFor1Day;

function start () {  
    //isNaN проверка money - возвращает true если в переменную записываются не цифры, цикл будет работать дальше
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
        time = prompt("Введите дату в формате YYYY-MM-DD");
    }
}
start();

appData = {
    budget:money, 
    timeData: time, 
    expenses : {}, 
    optionalExpenses: {}, 
    income : [], 
    savings: true};//создаем объект для хранения данных

function chooseExpenses () {
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
}

chooseExpenses();

appData.budgetFor1Day = (appData.budget / 30).toFixed(); // разделим на 30 бюджет и добавим в объект appData новое свойство budgetFor1Day и округлим

alert("Ежедневный бюджет " + appData.budgetFor1Day);

if (appData.budgetFor1Day < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.budgetFor1Day > 100 && appData.budgetFor1Day < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.budgetFor1Day > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

//функция для расчета накопления с депозита
function checkSavings() {
    if (appData.savings == true) { //проверяем есть ли сбережения?
        let save = +prompt("Какова сумма накоплений?"),
            persent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*persent; //добавляем в объект , создаем новое свойство monthIncome. Переводим в проценты - делим на 100 и делим на 12 месяцев и умножаем на процент
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();