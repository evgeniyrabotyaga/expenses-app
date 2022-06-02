import { useState } from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <p className="expenses-item__empty">No expenses found.</p>;
  }

  return (
    <ul>
      {props.filteredExpenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
