import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <div className="container">
            <ul className='list-group'>
                {expenses.map((expense) => (
                    <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
                ))}
            </ul>
        </div>
    )
}

export default ExpenseList