
$('#submit').click(function(){

  // console.log("Used Car");

  var accountNumber = $('#accountNumber').val();
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var purchasePrice = $('#purchasePrice').val();
  var carPrice = 1000000;

  var remainingBalance = carPrice - purchasePrice;
  

  
  if(accountNumber == '' || firstName == '' || lastName == '' || purchasePrice == ''){
    alert("Please fill-in everything.");  
  }
  else{
    $('#result').append(`Account number: ${accountNumber}`);
    $('#result').append(`<br>`);
    $('#result').append(`Customer name: ${firstName} ${lastName}`);
    $('#result').append(`<br>`);
    $('#result').append(`Downpayment: ${purchasePrice}`);
    $('#result').append(`<br>`);
    
    var twentyFourMonths = (remainingBalance / 24);
    var withInterest = twentyFourMonths * 0.02;
    var totalMonthly = twentyFourMonths + withInterest;
    // * 0.02

    var month = 24;
    var cntrlVrbl = 0;
    while(cntrlVrbl < month){
      $('#result').append(`Price each month: ${parseInt(totalMonthly)}`);
      $('#result').append(`<br>`);

      if(cntrlVrbl == 23 && totalMonthly <= 25){
        $('#result').append(`You may pay off the account.`);
      }

      cntrlVrbl = cntrlVrbl + 1;
    }

  }


  
  

})