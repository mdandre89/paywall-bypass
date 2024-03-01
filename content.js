const removePaywall = () => {
  var paywallWrapper = document.getElementById('paywall_wrapper');
  if (paywallWrapper) {
      paywallWrapper.remove();
  }

  document.querySelectorAll('*').forEach(function(element) {
      element.style.filter = 'blur(0)';
      var computedStyle = window.getComputedStyle(element);
      if (computedStyle.overflow === 'hidden') {
          element.style.overflow = 'visible';
      }
  });
}

setTimeout(removePaywall, 1000);
var paywallWrapper = document.getElementById('paywall_wrapper');
if(paywallWrapper){ // run a second time if delayed
  setTimeout(removePaywall, 5000);
}
