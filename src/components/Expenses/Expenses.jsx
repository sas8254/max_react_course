import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

export default function Expenses({ expenses }) {
  const [filterYear, setFilterYear] = useState("2021");
  const filterChangeHandeler = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() == filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangefilter={filterChangeHandeler}
          selected={filterYear}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}
