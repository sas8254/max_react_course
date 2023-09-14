import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

export default function Expenses({ expenses }) {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandeler = (year) => {
    setFilterYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangefilter={filterChangeHandeler}
          selected={filterYear}
        />
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
      </Card>
    </div>
  );
}
