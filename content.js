function removePaywall() {
  console.log("Attempting to remove paywall...");
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