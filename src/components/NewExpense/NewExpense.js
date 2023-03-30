import React, { useState } from 'react'
import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
  return (
    <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={stopEditingHandler}/>}
    </div>
  )
}
