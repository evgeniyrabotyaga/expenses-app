function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expenses-item__date">
      <div className="expenses-item__date--day">{day}</div>
      <div className="expenses-item__date--month">{month}</div>
      <div className="expenses-item__date--year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
