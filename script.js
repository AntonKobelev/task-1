let money, time, appData, mandatoryExpenditureItem, cost, budgetFor1Day;
money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");
appData = {moneyKey:money, timeKey: time, expenses : {}, optionalExpenses: {}, income : []};//создаем объект для хранения данных
mandatoryExpenditureItem = prompt("Введите обязательную статью расходов в этом месяце");
cost = prompt("Во сколько обойдется?");
appData.expenses.mandatoryExpenditureItem = cost;//добавляем в объект expenses пару ключ-значение обяз.статья расходов - стоимость
budgetFor1Day = (money - appData.expenses.mandatoryExpenditureItem)/30; //из бюджета на месяц вычтем обяз.статью расходов и разделим на 30
alert(budgetFor1Day);

