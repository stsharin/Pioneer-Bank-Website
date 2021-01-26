// login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    // getting the value
    const depositAmount = document.getElementById("depositAmount").value;
    // converting string to float
    const depositNumber = parseFloat(depositAmount);

    // // dashboard deposit
    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // console.log(totalDeposit);
    // // setting current deposit
    // document.getElementById("currentDeposit").innerText = totalDeposit;
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

    // empty string
    document.getElementById("depositAmount").value = "";
})

function updateSpanText(id, depositNumber){
    // dashboard balance
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    // setting current deposit
    document.getElementById(id).innerText = totalAmount;
}