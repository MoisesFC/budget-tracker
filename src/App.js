import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/ExpenseForm";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-md">
            <Budget />
          </div>
          <div className="col-md">
            <Remaining />
          </div>
          <div className="col-md">
            <ExpenseTotal />
          </div>
          <div className="row mt-3">
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <ExpenseList />
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="mt-3">
          <div className="col-md">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>

  );
};

export default App;