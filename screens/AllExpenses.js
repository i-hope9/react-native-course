import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expenses_context";

export default function AllExpenses() {
  const expensesCtx = useContext(ExpenseContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="지출이 없습니다."
    />
  );
}
