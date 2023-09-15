import ExpenseItem from "./ExpenseItem";
import "./expensesList.css";

export default function ExpansesList({ expenses }) {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }
  return (
    <ul className="expanses-list">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
}
