import React, { useState } from "react";

import ExpenseList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, SetFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
  SetFilteredYear(selectedYear);
};

const filteredExpenses = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === filteredYear;
});

return (
  <div>
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList items={filteredExpenses}/>
    </Card>
  </div>
  );
};

export default Expenses;
