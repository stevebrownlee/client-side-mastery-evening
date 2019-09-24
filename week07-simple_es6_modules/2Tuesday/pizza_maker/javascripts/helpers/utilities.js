const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const formatPrice = cents => (cents / 100).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default { printToDom, formatPrice };