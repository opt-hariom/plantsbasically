document.addEventListener('DOMContentLoaded', function() {
  var urlParams = new URLSearchParams(window.location.search);
  var discountCode = urlParams.get('discount'); // Assuming 'discount' is your URL parameter
  if(discountCode) {
    var message = 'Discount code ' + discountCode + ' applied! Enjoy your savings.';
    var notificationBar = document.createElement('div');
    notificationBar.innerText = message;
    notificationBar.style.padding = '10px';
    notificationBar.style.backgroundColor = '#d2b360';
    notificationBar.style.color = 'white';
    notificationBar.style.textAlign = 'center';
    document.body.prepend(notificationBar);
  }
});