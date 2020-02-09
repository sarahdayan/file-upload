export default function getClosest(n, set) {
  return [...set]
    .reverse()
    .reduce((prev, curr) =>
      Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev
    );
}
