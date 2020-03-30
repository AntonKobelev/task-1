let money, time, appData, mandatoryExpenditureItem, cost;
money = +prompt("Ваш бюджет на месяц?"); //ставим унарный плюс чтобы перевести строку в число
time = prompt("Введите дату в формате YYYY-MM-DD");
appData = {
    moneyKey: money,
    timeKey: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}; //создаем объект для хранения данных

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

appData.budgetFor1Day = (appData.moneyKey) / 30; // разделим на 30 бюджет и добавим в объект appData новое свойство budgetFor1Day

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