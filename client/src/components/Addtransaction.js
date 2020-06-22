import React,{useState}from 'react'
import { Globalcontext } from '../App'
import {useContext} from 'react'

const  Addtransaction=()=>{
  const {addTransaction} = useContext(Globalcontext)
    const [Text, setText] = useState('')
    const [amount, setamount] = useState('')

    const formsubmit=(e)=>{
    e.preventDefault()

    const updatedValue={
      id:Math.floor(Math.random()*1000000),
      Text,
      amount:+amount
    }
   addTransaction(updatedValue)
    }
    return (
        <div>
            <h3>Add new transaction</h3>
      <form onSubmit={formsubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={Text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            </label>
          <input type="number"  value={amount} onChange={(e)=>setamount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </div>
    )
}

export default Addtransaction
