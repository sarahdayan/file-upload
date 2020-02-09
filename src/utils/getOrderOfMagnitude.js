export default function getOrderOfMagnitude(n) {
  const order = Math.floor(Math.log(n) / Math.LN10);

  return Math.pow(10, order);
}
