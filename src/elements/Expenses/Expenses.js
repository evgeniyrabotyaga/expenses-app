// import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const yearFilterData = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.generalData.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter dafaultYear={filteredYear} onYearData={yearFilterData} />
      {/* {filteredExpenses.length === 0 && (
        <p className="expenses-item__empty">No expenses found.</p>
      )}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))} */}
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList
        expensesObject={props.expensesObject}
        filteredExpenses={filteredExpenses}
      />
    </Card>
  );
};

export default Expenses;
