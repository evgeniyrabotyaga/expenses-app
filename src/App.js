import Expenses from "./elements/Expenses/Expenses";
import NewExpense from "./elements/Expenses/NewExpense";
import { useState } from "react";

let INIT_EXPENSES;

if (localStorage.getItem("expensesLocal")) {
  INIT_EXPENSES = JSON.parse(localStorage.getItem("expensesLocal"));
  INIT_EXPENSES.forEach((e) => (e.date = new Date(e.date)));
} else {
  INIT_EXPENSES = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 0, 20),
    },
    {
      id: "e2",
      title: "New Desk (Wooden)",
      amount: 100.32,
      date: new Date(2022, 2, 1),
    },
    {
      id: "e3",
      title: "Computer Parts",
      amount: 703.08,
      date: new Date(2019, 2, 13),
    },
    {
      id: "e4",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 4, 29),
    },
  ];
  localStorage.setItem("expensesLocal", JSON.stringify(INIT_EXPENSES));
}

function App() {
  const [expensesObject, setExpensesObject] = useState(INIT_EXPENSES);
  localStorage.setItem("expensesLocal", JSON.stringify(expensesObject));
  const addExpenseHandler = (expense) => {
    setExpensesObject((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        expensesObject={INIT_EXPENSES}
        generalData={expensesObject}
      ></Expenses>
    </div>
  );
}

export default App;
