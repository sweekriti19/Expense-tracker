import React from 'react'
import { Globalcontext } from '../App'
import {useContext} from 'react'
function Transaction({transaction}) {
    const {deleteTransaction} = useContext(Globalcontext)
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <div>
            <li className={sign==='-'?'minus':'plus'}>
        
          <span>{transaction.Text}{sign}${ Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={()=>deleteTransaction(transaction._id)}>x</button>
        </li> 
        </div>
    )
}

export default Transaction
