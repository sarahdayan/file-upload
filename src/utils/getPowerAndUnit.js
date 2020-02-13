import getOrderOfMagnitude from "@/utils/getOrderOfMagnitude";
import getUnitAndPowerFromOrderOfMagnitude from "@/utils/getUnitAndPowerFromOrderOfMagnitude";

export default function getPowerAndUnit(n) {
  const order = getOrderOfMagnitude(n);

  return getUnitAndPowerFromOrderOfMagnitude(order);
}
