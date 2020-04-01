let money, time, appData, mandatoryExpenditureItem1, cost1, mandatoryExpenditureItem2, cost2, budgetFor1Day;

function start () {  
    time = prompt("Введите дату в формате YYYY-MM-DD");
    //isNaN проверка money - возвращает true если в переменную записываются не цифры, цикл будет работать дальше
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();


appData = {
    budget:money, 
    timeData: time, 
    expenses : {}, 
    optionalExpenses: {}, 
    income : [], 
    savings: false};//создаем объект для хранения данных


mandatoryExpenditureItem1 = prompt("Введите обязательную статью расходов в этом месяце");
cost1 = prompt("Во сколько обойдется?");
mandatoryExpenditureItem2 = prompt("Введите обязательную статью расходов в этом месяце");
cost2 = prompt("Во сколько обойдется?");
appData.expenses[mandatoryExpenditureItem1] = cost1;//добавляем в объект expenses пару ключ-значение обяз.статья расходов - стоимость
appData.expenses[mandatoryExpenditureItem2] = cost2;//добавляем в объект expenses пару ключ-значение обяз.статья расходов - стоимость
budgetFor1Day = (appData.moneyKey)/30; //из бюджета на месяц вычтем обяз.статью расходов и разделим на 30
alert(budgetFor1Day);

