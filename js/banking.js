function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    inputField.value = "";
    return inputAmount;
}

function updateTotalField(totalFieldId,amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;


}

function getCurrentBalance(){
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    return previousBalance;
}

function updateBalanceField(amount, isAdd){
    const balanceTotal = document.getElementById("balance-total");

    const previousBalance = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalance + amount;

    }
    else{
        balanceTotal.innerText = previousBalance - amount; 

    }
}
//deposit balance
document.getElementById("deposit-button").addEventListener("click",function(){
    const depositAmount = getInputValue("deposit-input");
   
    if(depositAmount > 0){     
    updateTotalField("deposit-total", depositAmount);   
    updateBalanceField(depositAmount, true);
    } 
})

//withdraw balance
document.getElementById("withdraw-button").addEventListener("click",function(){
   const withdrawAmount = getInputValue("withdraw-input");
   const currentBalance = getCurrentBalance();

   if(withdrawAmount > 0 && withdrawAmount < currentBalance){
    updateTotalField("withdraw-total", withdrawAmount);
    updateBalanceField(withdrawAmount, false);
   }

})