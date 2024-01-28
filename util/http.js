import axios from 'axios';

export function storeExpense(expenseData) {
    axios.post(
        'https://family-app-test-be246-default-rtdb.europe-west1.firebasedatabase.app/message.json',
        expenseData
    );
}