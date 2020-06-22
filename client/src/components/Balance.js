import React,{useContext} from 'react'
import { Globalcontext } from '../App'

function Balance() {
    const {transactions} = useContext(Globalcontext)
    const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, items) => (acc += items), 0).toFixed(2);
    return (
        <div>
             <h4>Your Balance</h4>
                <h1 id="balance">${total}</h1>
        </div>
    )
}

export default Balance
