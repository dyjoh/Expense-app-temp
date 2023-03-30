import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  let expenseContent = <p className="none">No Expenses Found</p>;

  if (props.filteredExpenses.length === 0) {
    return expenseContent;
  }
  return (
    <ul className="expenses-list">
      <li>
        {props.filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </li>
    </ul>
  );
}
