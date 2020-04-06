const debounce = (func, delay) => {
  console.log('Hi i ma inside debounce');
  let debounceTimer;
  return function() {
    console.log('I am inside return');
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

	button.addEventListener(
		  "click",
		  debounce(function() {
				console.log('here in console');
		  }, 200)
		)


