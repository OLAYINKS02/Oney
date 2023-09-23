function
calculateMonthlyPayment(){
    var loanAmount=parseFloat(document.getElementById('loanAmount').nodeValue);
    var interestRate=parseFloat(document.getElementById('interestRate').value);
    var loanTerm=parseInt(document.getElementById(''loanTerm).value);

    //perform the loan calculation//
    var monthlyInterestRate=interestRate / 100 / 12;
    var monthlyPayment=(loanAmount * monthlyInterestRate) /  (1-Math.pow(1 + monthlyInterestRate,-loanTerm));

   // display the result in the monthlyPaymentinput field//
   document.getElementById('monthlyPayment').value=monthlyPayment.toFixed(2);
}