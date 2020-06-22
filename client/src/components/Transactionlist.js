import React,{useEffect} from 'react'
import { Globalcontext } from '../App'
import {useContext} from 'react'
import Transaction from './Transaction'
function Transactionlist() {
    const {transactions, getTransaction} = useContext(Globalcontext)
    useEffect(() => {
      getTransaction()
    },[])
    return (
        <div>
             <h3>History</h3>
      <ul className="list">
      {transactions.map(transaction=>(
        <Transaction key={transaction._id} transaction={transaction}/>
      ))}
      </ul>
        </div>
    )       

}

export default Transactionlist
