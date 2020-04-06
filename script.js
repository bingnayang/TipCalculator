// Listen for button submit
document.getElementById('tipForm').addEventListener('submit', calculateAmount);

// Calculate the total
function calculateAmount(e){
    // Declare var
    const bill_amount = document.getElementById('billAmount').value;
    const tip_percent = document.getElementById('tipPercent').value;
    const number_split = document.getElementById('numberPerson').value;
    const tip_result = document.getElementById('tipResult');
    const total_result = document.getElementById('totalResult');
    const each_result = document.getElementById('eachResult');


    // Calculate the result

    const billInput = parseFloat(bill_amount);
    const tipInput = parseFloat(tip_percent);
    const numberInput = parseInt(number_split);

    const tipAmount = billInput * tipInput;
    const totalAmount = billInput + tipAmount;
    const eachAmount = totalAmount/numberInput;

    // Display the result
    tip_result.value = tipAmount.toFixed(2);
    total_result.value = totalAmount.toFixed(2);
    each_result.value = eachAmount.toFixed(2);

    e.preventDefault();

}
