import React,{createContext,useReducer} from 'react';
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import Incomeexpense from './components/Incomeexpense';
import Transactionlist from './components/Transactionlist';
import Addtransaction from './components/Addtransaction';
import axios from 'axios';

const initialState = {
  transactions:[],
  error:null,
  loading:true

};

const reducer=(state,action)=>{
  switch(action.type){
    case 'GET_DATA':
      return{
        ...state,
        transactions:action.payload,
        loading:false

      }
    case 'DELETE':
    return{
      ...state,
      transactions:state.transactions.filter(transaction=>transaction._id!==action.payload)
    }
    case 'ADD':
      return{
        ...state,
        transactions:[...state.transactions,action.payload]
      }
    default:
      return state
  }
}

export const Globalcontext=createContext(initialState)

function App() {
const [state, dispatch] = useReducer(reducer, initialState)

async function getTransaction(){
 
    axios.get('http://localhost:4000/trans').then(res=>{
     dispatch({
      type:'GET_DATA',
      payload:res.data
    })
 
    }).catch(err=>{
      console.log(err)
    })
  }

function deleteTransaction(id){
  axios.delete(`http://localhost:4000/trans/${id}`).then(res=>{
    if(res.data){ 
      dispatch({
      type:'DELETE',
      payload:id
    })
  }

}).catch(err=>{
  console.log(err)
})
}

  function addTransaction(transaction){
    axios.post(`http://localhost:4000/trans`,transaction).then(res=>{
      if(res.data){ 
    dispatch({
      type:'ADD',
      payload:res.data
    })
  }

}).catch(err=>{
  console.log(err)
})
}

  return (
    <Globalcontext.Provider value={{transactions:state.transactions,loading:state.loading, error:state.error,getTransaction:getTransaction,deleteTransaction:deleteTransaction,addTransaction:addTransaction}}>
    <div>
     <Header/>
    <div className="container">
      <Balance/>
      <Incomeexpense/>
      <Transactionlist/>
      <Addtransaction/>
    </div>
    </div>
    </Globalcontext.Provider>
  );
}

export default App;
