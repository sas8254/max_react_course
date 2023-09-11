import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpenses(props) {
  const saveEcpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Date.now(),
      ...enteredExpenseData,
    };
    props.onAddExpenseData(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveEcpenseDataHandler} />
    </div>
  );
}
