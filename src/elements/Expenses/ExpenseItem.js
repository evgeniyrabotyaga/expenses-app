import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expenses-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expenses-item__description">
          <h2 className="heading-2">{props.title}</h2>
          <div className="expenses-item__amount">
            ${props.amount.toFixed(2)}
          </div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
