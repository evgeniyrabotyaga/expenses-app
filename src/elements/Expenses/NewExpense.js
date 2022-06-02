import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setisEditing(false);
  };

  const [isEditing, setisEditing] = useState(false);

  const startEditingHandler = () => {
    setisEditing(true);
  };

  const stopEditingHandler = () => {
    setisEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <div className="new-expense__modal">
          <button className="new-expense__btn" onClick={startEditingHandler}>
            Add New Expense
          </button>
        </div>
      )}
      {isEditing && (
        <ExpenseForm
          onFormSubmitData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
