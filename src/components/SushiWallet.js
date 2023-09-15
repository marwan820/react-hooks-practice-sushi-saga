import React, {useState}from 'react'

export default function SushiWallet({onAddmoney}) {
const [amount,setAmount] = useState(0)

function handleAmountChange(e) {
    const amt = e.target.value
    if (amt === ""  || isNaN(amt)) {
        
    } else { setAmount(parseInt(amt))
        
    }
}

function handleSubmit(e){
    e.preventDefault()
    onAddmoney(amount)
    setAmount(0)
}

return(
    <form onSubmit={handleSubmit}>
        <input type="number" value={amount} onChange={handleAmountChange}/>
        <input type="submit"  value="Add $$ to wallet"/>



    </form>

)}
