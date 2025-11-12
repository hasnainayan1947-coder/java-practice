// Simple ATM Simulator

// 1 Default balance
let balance = 1000;

// 2 Correct PIN
const correctPin = "1234";

// Ask for user PIN
let enteredPin = prompt("Enter your 4-digit PIN:");

// Check if PIN is correct
if (enteredPin !== correctPin) {
  alert("Incorrect PIN!");
} else {
  // 3 Show main menu
  let choice = prompt(
    "Welcome to JS ATM\n\n" +
    "1 Check Balance\n" +
    "2 Withdraw\n" +
    "3 Deposit\n" +
    "4 Exit\n\n" +
    "Enter your choice (1-4):"
  );

  // 4 Handle each menu option
  if (choice === "1") {
    // Check Balance
    alert("Your balance is: $" + balance);

  } else if (choice === "2") {
    //Withdraw
    let withdrawAmount = (prompt("Enter amount to withdraw:"));

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      alert("Invalid amount!");
    } else if (withdrawAmount > balance) {
      alert("Insufficient funds!");
    } else {
      balance -= withdrawAmount;
      alert("Withdrawal successful! New balance: $" + balance);
    }

  } else if (choice === "3") {
    // Deposit
    let depositAmount = parseFloat(prompt("Enter amount to deposit:"));

    if (isNaN(depositAmount) || depositAmount <= 0) {
      alert("Invalid amount!");
    } else {
      balance += depositAmount;
      alert("Deposit successful! New balance: $" + balance);
    }

  } else if (choice === "4") {
    //  Exit
    alert("Thank you for using the ATM!");
  } else {
    // Invalid input
    alert("Invalid option!");
  }
}
