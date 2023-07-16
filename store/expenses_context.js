import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "신발",
    amount: 59000,
    date: new Date("2023-07-09"),
  },
  {
    id: "e2",
    description: "탈취제",
    amount: 20000,
    date: new Date("2023-07-08"),
  },
  {
    id: "e3",
    description: "여름 바지",
    amount: 100000,
    date: new Date("2023-07-08"),
  },
  {
    id: "e4",
    description: "수박",
    amount: 32000,
    date: new Date("2023-07-07"),
  },
  {
    id: "e5",
    description: "애플워치",
    amount: 900000,
    date: new Date("2023-07-06"),
  },
  {
    id: "e6",
    description: "스타벅스",
    amount: 3150,
    date: new Date("2023-07-05"),
  },
  {
    id: "e7",
    description: "밀크티",
    amount: 17000,
    date: new Date("2023-07-04"),
  },
  {
    id: "e8",
    description: "우양산",
    amount: 23000,
    date: new Date("2023-07-03"),
  },
  {
    id: "e9",
    description: "꽃",
    amount: 9000,
    date: new Date("2023-07-03"),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseId = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseId];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseId] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return false;
  }
}

export default function ExpenseContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expenseState,
    addExpense,
    deleteExpense,
    updateExpense,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}
