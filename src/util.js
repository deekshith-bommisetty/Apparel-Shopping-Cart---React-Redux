//function to convert the price of a product to string and append a dollar sign
export default function formatCurrency(num) {
  return '$ ' + Number(num.toFixed(1)).toLocaleString() + ' ';
}
