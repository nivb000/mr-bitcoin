export const userService = {
    getUser,
    onTransaction,
    getTransactions
}


const transactions = []
const user = {
    _id: 'u101',
    name: "Puki Ben David",
    balance: 100,
    transactions: []
}
function onTransaction(transaction) {
    console.log('received', transaction);
    user.balance -= transaction.amount
    user.transactions.push(transaction)
    transactions.push(transaction)
}

function getUser() {
    return user
}
function getTransactions() {
    console.log('get transactions...');
    return transactions
}